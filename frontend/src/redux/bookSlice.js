import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchBooks, fetchBook } from '../api';

export const getBooks = createAsyncThunk('books/getBooks', async () => {
  const { data } = await fetchBooks();
  return data;
});

export const getBook = createAsyncThunk('books/getBook', async (id) => {
  const { data } = await fetchBook(id);
  return data;
});

const bookSlice = createSlice({
  name: 'books',
  initialState: { books: [], book: null, status: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.fulfilled, (state, action) => {
        state.books = action.payload;
        state.status = 'succeeded';
      })
      .addCase(getBook.fulfilled, (state, action) => {
        state.book = action.payload;
        state.status = 'succeeded';
      });
  },
});

export default bookSlice.reducer;
