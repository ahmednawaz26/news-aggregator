import React from 'react';
import NewsFeed from '../features/newsFeed/NewsFeed';
import Filters from '../features/filters/Filters';

const Home = () => {
  return (
    <>
      <Filters />
      <div>
        <NewsFeed />
      </div>
    </>
  );
};

export default Home;
