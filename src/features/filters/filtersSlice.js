import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: '',
  source: '',
  date: ''
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategory(state, action) {
      state.category = action.payload;
    },
    setSource(state, action) {
      state.source = action.payload;
    },
    setDate(state, action) {
      state.date = action.payload;
    }
  }
});

export const { setCategory, setSource, setDate } = filtersSlice.actions;

export default filtersSlice.reducer;

export const getCategory = (state) => state.filters.category;

export const getSource = (state) => state.filters.source;

export const getDate = (state) => state.filters.date;
