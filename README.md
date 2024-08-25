# News Aggregator Website

## Description
A news aggregator website built using React.js. This project features article search and filtering, a personalized news feed, and integration with multiple news APIs. The application is also containerized using Docker for easy deployment.

## Features
- Article search and filtering
- Personalized news feed
- Mobile-responsive design
- Integration with at least three news APIs
- Dockerized for easy deployment

## Installation

### Prerequisites
Node.js (version 18 or later)

Docker (version 20 or later)

### Clone the Repository
https://github.com/ahmednawaz26/news-aggregator.git

cd news-aggregator

### Install Dependencies
npm install

### Environment Variables
Before running the application, you'll need to set up environment variables. These variables are essential for configuring the application, including API keys for the news services.

1. Creating the .env File

Create a .env file in the root directory of your project:

touch .env

2. Open the .env file and add the following environment variables:

VITE_NEWS_API_KEY=your-news-api-key

VITE_NYT_API_KEY=your-the-new-york-times-news-api-key

VITE_GUARDIAN_API_KEY=your-the-guardian-news-api-key

Replace your-news-api-key, your-the-new-york-times-news-api-key and your-the-guardian-news-api-key with your actual API keys.

Example .env File

VITE_NEWS_API_KEY=0ce387109a2a4f570998fezhfd47qm10

VITE_NYT_API_KEY=c3dJdRm1q240e6Hpzb4QHZ9FrPqPn1FC

VITE_GUARDIAN_API_KEY=239fd9x9-b33e-4e50-93tg-fd8887530f5b

### Running the Application

### Local Development
To run the application locally, use the following command:

npm run dev

### Docker
Build the Docker Image

sudo docker build -t vite-react-app:latest .

Run the Docker Container

sudo docker run -d -p 80:80 --name vite-react-app-container vite-react-app:latest

Access the application at http://localhost/

Stop and Remove the Docker Container

To stop the container:

sudo docker stop vite-react-app-container

To remove the container:

sudo docker rm vite-react-app-container

### Configuration
You can configure the application by modifying the .env file in the root directory. Ensure you have the necessary API keys and configurations for the news APIs you are using.

### Screenshots
![WhatsApp Image 2024-08-24 at 15 52 53](https://github.com/user-attachments/assets/774ded15-5ec1-431e-badb-47187ff13238)

![WhatsApp Image 2024-08-24 at 15 53 08](https://github.com/user-attachments/assets/3d48f057-8fe6-46d5-b2c1-83b4dbd1e9e3)

![WhatsApp Image 2024-08-24 at 15 54 28](https://github.com/user-attachments/assets/cc8dfd3a-e72a-414b-8f25-57def02d4cb4)

![WhatsApp Image 2024-08-24 at 15 53 34](https://github.com/user-attachments/assets/b042ea44-843f-4c0f-8563-046dc358c71d)
