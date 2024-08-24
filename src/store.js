import { configureStore } from '@reduxjs/toolkit';
import searchBarReducer from './features/search/searchBarSlice';
import filtersReducer from './features/filters/filtersSlice';
import newsReducer from './features/newsFeed/newsSlice';
import settingsReducer from './features/settings/settingsSlice';

const store = configureStore({
  reducer: {
    searchBar: searchBarReducer,
    filters: filtersReducer,
    news: newsReducer,
    settings: settingsReducer
  }
});

export default store;
