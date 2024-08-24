import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getSearchKeyword } from '../search/searchBarSlice';
import { fetchNews, getArticles, getStatus, getTotalResults } from './newsSlice';
import Loader from '../../ui/Loader';
import { getCategory, getDate, getSource } from '../filters/filtersSlice';
import Pagination from './Pagination';
import ArticleList from './ArticleList';
import { getSettings } from '../settings/settingsSlice';

const StyledNewsFeed = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
`;

const NewsFeed = () => {
  const { category: settingsCategory, source: settingsSource } = useSelector(getSettings);
  const searchKeyword = useSelector(getSearchKeyword);
  const category = useSelector(getCategory);
  const source = useSelector(getSource);
  const date = useSelector(getDate);
  const newsStatus = useSelector(getStatus);
  const articles = useSelector(getArticles);
  const totalResults = useSelector(getTotalResults);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const payloadSource = source === '' ? settingsSource : source;

  useEffect(() => {
    const payloadSource = source === '' ? settingsSource : source;
    if (!payloadSource || payloadSource === '') return;
    const payloadCategory = category === '' ? settingsCategory : category;
    dispatch(
      fetchNews({ searchKeyword, category: payloadCategory, source: payloadSource, date, page: 1 })
    );
    setPage(1);
  }, [searchKeyword, category, settingsCategory, source, settingsSource, date]);

  useEffect(() => {
    if (!payloadSource || payloadSource === '') return;
    dispatch(fetchNews({ searchKeyword, category, source, date, page }));
  }, [page]);

  if (newsStatus === 'loading') {
    return <Loader />;
  }

  if (!payloadSource || payloadSource === '') {
    return (
      <StyledNewsFeed>
        <p>Please select source to display articles</p>
      </StyledNewsFeed>
    );
  }

  if (articles.length === 0) {
    return (
      <StyledNewsFeed>
        <p>No articles</p>
      </StyledNewsFeed>
    );
  }

  return (
    <StyledNewsFeed>
      <ArticleList articles={articles} />
      <Pagination currentPage={page} totalResults={totalResults} onPageChange={setPage} />
    </StyledNewsFeed>
  );
};

export default NewsFeed;
