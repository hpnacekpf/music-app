import { createSlice } from '@reduxjs/toolkit';

interface MusicState {
  data: null,
  loading: boolean,
  error: null,
}

export const initialState: MusicState = {
  data: null,
  loading: false,
  error: null,
};

export const music = createSlice({
  name: 'music',
  initialState,
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
