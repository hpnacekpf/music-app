import {takeEvery, put, call, all} from 'redux-saga/effects';
import { music } from './music.ts';
import { api } from '../../Services/api.ts'

function* fetchData(): Generator {
  console.log('Fetching data');
  try {
    yield put(music.actions.getDataMusicStart());
    const data = yield call(api.getDataMusics);
    console.log(data);
    yield put(music.actions.getDataMusicSuccess(data));
  } catch (error) {
    yield put(music.actions.getDataMusicFailure(error));
  }
}

export function* musicSaga() {
  yield all([
    takeEvery('getDataMusic', fetchData)
  ])
}
