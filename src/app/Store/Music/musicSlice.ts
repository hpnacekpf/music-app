import { createSlice } from '@reduxjs/toolkit';

interface MusicState {
  data: {[key: string]: unknown},
  loading: boolean,
  error: null,
}

const musicSlice = createSlice({
  name: 'music',
  initialState: { data: {}, loading: false, error: null } as MusicState,
  reducers: {
    getData: (state) => {
      state.loading = true;
      state.error = null;
    },
    getDataSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    getDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default musicSlice;
