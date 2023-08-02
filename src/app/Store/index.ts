import { PayloadAction, combineReducers, configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga';
import { all, fork } from "redux-saga/effects";
import { persistReducer } from 'redux-persist'
import createIdbStorage from '@piotr-cz/redux-persist-idb-storage'
import { music, initialState as initialStateMusic } from './Music/music.ts';
import { musicSaga } from './Music/musicSaga.ts'

const initialGlobalState = {
  music: initialStateMusic,
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
  music: music.reducer,
});

const persistConfig = {
  key: 'root',
  storage: createIdbStorage({name: 'musicApp', storeName: 'music-app'}),
  version: 2
};
const persistedReducer = persistReducer(persistConfig, globalReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }).concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export {music};
