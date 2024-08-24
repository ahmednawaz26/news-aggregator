import React from 'react';
import Article from './Article';
import styled from 'styled-components';

const StyledArticleList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
  padding: 16px;
`;

const ArticleList = ({ articles }) => {
  return (
    <StyledArticleList>
      {articles.map((article) => (
        <Article key={article.id} article={article} />
      ))}
    </StyledArticleList>
  );
};

export default ArticleList;
