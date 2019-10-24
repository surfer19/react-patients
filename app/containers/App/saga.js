/**
 * Gets Records from JSON
 */

import { put, takeLatest } from 'redux-saga/effects';
import {
  LOAD_RECORDS_START,
  SET_PRACTITIONER_START,
  SET_CURRENT_PATIENT_START,
} from './constants';
import {
  loadRecordsSuccess,
  loadRecordsError,
  setPractitionerSuccess,
  setPatientIdSuccess,
} from './actions';
import mockData from '../HomePage/data.json';

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

export function* setPractitioner(action) {
  yield put(setPractitionerSuccess(action.id));
}

export function* setPatientId(action) {
  yield put(setPatientIdSuccess(action.id));
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* recordsData() {
  yield takeLatest(SET_PRACTITIONER_START, setPractitioner);
  yield takeLatest(LOAD_RECORDS_START, getRecords);
  yield takeLatest(SET_CURRENT_PATIENT_START, setPatientId);
}
