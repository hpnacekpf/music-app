import { PayloadAction, combineReducers, configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga';
import { all, fork } from "redux-saga/effects";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist-indexeddb-storage';
import { music } from './Music/musicSaga.ts';
import { musicSaga } from './Music/musicSaga.ts'

const initialGlobalState = {
  music: music.initialState,
};

function* rootSaga() {
  yield all([
    fork(musicSaga),
  ]);
}
function globalReducer(state = initialGlobalState, action: PayloadAction<unknown>) {
  return combinedRds(state, action);
}

const sagaMiddleware = createSagaMiddleware();
const combinedRds = combineReducers({
  chat: music.reducer,
});

const persistConfig = {
  key: 'root',
  storage: storage('myDb'),
  version: 2
};
const persistedReducer = persistReducer(persistConfig, globalReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }).concat(sagaMiddleware) // , logger
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export {music};
