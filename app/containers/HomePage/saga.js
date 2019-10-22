/**
 * Gets Records from JSON
 */

import { put, takeLatest, select } from 'redux-saga/effects';
import {
  LOAD_RECORDS_START,
  GET_PRACTITIONER_START,
} from 'containers/HomePage/constants';
import {
  loadRecordsSuccess,
  loadRecordsError,
  getPractitionerSuccess,
  getPractitionerNotExist,
} from 'containers/HomePage/actions';
import { selectPractitionerId } from './selectors';
import mockData from './data.json';

/**
 * TODO:
 */
export function* getRecords() {
  try {
    const data = yield mockData;
    yield put(loadRecordsSuccess(data));
  } catch (err) {
    yield put(loadRecordsError(err));
  }
}

export function* getPratitioner(action) {
  const id = yield select(selectPractitionerId, action.id);

  if (id) {
    yield put(getPractitionerSuccess(id));
  } else {
    yield put(getPractitionerNotExist());
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* recordsData() {
  yield takeLatest(GET_PRACTITIONER_START, getPratitioner);
  yield takeLatest(LOAD_RECORDS_START, getRecords);
}
