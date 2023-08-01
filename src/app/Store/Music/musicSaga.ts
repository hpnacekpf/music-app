import { takeLatest, put, call } from 'redux-saga/effects';
import { getDataMusicStart, getDataMusicSuccess, getDataMusicFailure } from './music.ts';
import { api } from '../../Services/api.ts'

function* fetchData(): Generator {
  try {
    yield put(getDataMusicStart());
    const data = yield call(api.getDataMusics);
    yield put(getDataMusicSuccess(data));
  } catch (error) {
    yield put(getDataMusicFailure(error));
  }
}

function* musicSaga() {
  yield takeLatest('getDataMusic', fetchData);
}

export default musicSaga;
