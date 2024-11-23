import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './bookSlice';
import reviewReducer from './reviewSlice';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    books: bookReducer,
    reviews: reviewReducer,
    user: userReducer,
  },
});
