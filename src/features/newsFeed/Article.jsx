import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  border-radius: 8px 8px 0 0;
`;

const ArticleContainer = styled.article`
  display: flex;
  flex-direction: column;
  margin: 16px;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  text-align: center;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const Title = styled.h1`
  font-size: 1.5em;
  margin: 16px 0;
`;

const Paragraph = styled.p`
  font-size: 1em;
  line-height: 1.5;
  color: #555;
  margin-bottom: 30px;
`;

const ReadMoreLink = styled.a`
  display: inline-block;
  margin-top: auto;
  color: #007bff;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const Article = ({ article: { title, content, url, urlToImage } }) => {
  return (
    <ArticleContainer>
      <Img src={urlToImage === '' ? 'images/news.png' : urlToImage} alt={title} />
      <Title>{title}</Title>
      <Paragraph>{content}</Paragraph>
      <ReadMoreLink href={url} target="_blank" rel="noopener noreferrer">
        Read more
      </ReadMoreLink>
    </ArticleContainer>
  );
};

export default Article;
