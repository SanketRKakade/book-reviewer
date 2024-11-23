import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUser, updateUser } from '../api';

export const getUser = createAsyncThunk('user/getUser', async (id) => {
  const { data } = await fetchUser(id);
  return data;
});

export const editUser = createAsyncThunk('user/editUser', async ({ id, userData }) => {
  const { data } = await updateUser(id, userData);
  return data;
});

const userSlice = createSlice({
  name: 'user',
  initialState: { user: null, status: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = 'succeeded';
      })
      .addCase(editUser.fulfilled, (state, action) => {
        state.user = action.payload;
      });
  },
});

export default userSlice.reducer;
