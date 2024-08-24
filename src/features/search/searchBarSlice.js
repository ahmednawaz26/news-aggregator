import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchKeyword: ''
};

const searchBarSlice = createSlice({
  name: 'searchBar',
  initialState,
  reducers: {
    setSearchKeyword(state, action) {
      state.searchKeyword = action.payload;
    }
  }
});

export const { setSearchKeyword } = searchBarSlice.actions;

export default searchBarSlice.reducer;

export const getSearchKeyword = (state) => state.searchBar.searchKeyword;
