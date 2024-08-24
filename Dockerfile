# Stage 1: Build the application
FROM node:18-alpine as BUILD_IMAGE
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the application using a web server
FROM nginx:alpine as PRODUCTION_IMAGE
WORKDIR /usr/share/nginx/html

# Copy the build output from the first stage
COPY --from=BUILD_IMAGE /app/dist/ .

# Expose the port the server will run on
EXPOSE 80

# No CMD needed since nginx already has an entrypoint
