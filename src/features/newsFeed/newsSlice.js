import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchFromAPI } from '../../services/apiNews';

export const fetchNews = createAsyncThunk('news/fetchNews', async function (data) {
  const responseData = await fetchFromAPI(data);
  return responseData;
});

const initialState = {
  articles: [],
  totalResults: 0,
  status: 'idle'
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(fetchNews.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.articles = action.payload.articles;
        state.totalResults = action.payload.totalResults;
        state.status = 'idle';
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.error = 'There was a problem getting the news.';
        state.status = 'error';
      })
});

export default newsSlice.reducer;

export const getArticles = (state) => state.news.articles;

export const getTotalResults = (state) => state.news.totalResults;

export const getStatus = (state) => state.news.status;
