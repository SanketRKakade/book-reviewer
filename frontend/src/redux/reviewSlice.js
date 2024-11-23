import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchReviews, postReview } from '../api';

export const getReviews = createAsyncThunk('reviews/getReviews', async (bookId) => {
  const { data } = await fetchReviews(bookId);
  return data;
});

export const addReview = createAsyncThunk('reviews/addReview', async (review) => {
  const { data } = await postReview(review);
  return data;
});

const reviewSlice = createSlice({
  name: 'reviews',
  initialState: { reviews: [], status: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.status = 'succeeded';
      })
      .addCase(addReview.fulfilled, (state, action) => {
        state.reviews.push(action.payload);
      });
  },
});

export default reviewSlice.reducer;
