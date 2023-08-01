import { createSlice } from '@reduxjs/toolkit';

export const music = createSlice({
  name: 'music',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getDataMusicStart: (state) => {
      state.loading = true;
    },
    getDataMusicSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    getDataMusicFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
