/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import ModuleNames from '../moduleNames';
import { InitialState } from './newsType';
import newsCompositeActions from './newsCompositeActions';

const initialState: InitialState = {
  news: null,
  loading: false,
};

const newsSlice = createSlice({
  name: ModuleNames.news,
  initialState,
  reducers: {
    setLoading(state) {
      state.loading = true;
    },
  },
  extraReducers: ((builder) => {
    builder
      .addCase(newsCompositeActions.getNewsData.request, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(newsCompositeActions.getNewsData.success, (state, { payload }) => ({
        ...state,
        news: payload.data,
        loading: false,
      }))
      .addCase(newsCompositeActions.getNewsData.error, (state) => ({
        ...state,
        loading: false,
      }));
  }),
});

export const {
  setLoading,
} = newsSlice.actions;

export default newsSlice.reducer;
