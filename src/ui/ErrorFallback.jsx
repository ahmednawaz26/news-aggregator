import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`;

const Button = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

const BackButton = styled(Button)`
  background-color: #6c757d;
  margin-bottom: 20px;

  &:hover {
    background-color: #5a6268;
  }
`;

const BackIcon = styled.span`
  display: inline-block;
  margin-right: 8px;

  svg {
    width: 16px;
    height: 16px;
    fill: white;
  }
`;

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <Container>
      <Title>Something went wrong.</Title>
      <BackButton onClick={resetErrorBoundary}>
        <BackIcon>
          <svg viewBox="0 0 24 24">
            <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z" />
          </svg>
        </BackIcon>
        Back to Home
      </BackButton>
    </Container>
  );
};

export default ErrorFallback;
