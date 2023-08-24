import {put, call} from 'redux-saga/effects';
import musicSlice from './musicSlice.ts';
import { api } from '../../Services/api.ts'

export default function* fetchDataMusic() {
  try {
    const response = yield call(api.getDataMusics);
    yield put(musicSlice.actions.getDataSuccess(response));
  } catch (error) {
    yield put(musicSlice.actions.getDataFailure(error.message));
  }
}
