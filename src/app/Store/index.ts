import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import musicSlice from "./Music/musicSlice.ts";
import audioReducer from "./Audio/audioSlice.ts";
import { all } from "redux-saga/effects";
import fetchDataMusic from './Music/musicSaga.ts';

function* rootSaga() {
  yield all([
    fetchDataMusic(),
  ]);
}

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    music: musicSlice.reducer,
    audio: audioReducer,
  },
  middleware: [sagaMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;

sagaMiddleware.run(rootSaga);

export default store;
