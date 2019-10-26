/*
 *
 * App actions
 *
 */

import {
  LOAD_RECORDS_START,
  LOAD_RECORDS_SUCCESS,
  LOAD_RECORDS_ERROR,
  SET_PRACTITIONER_START,
  SET_PRACTITIONER_SUCCESS,
  SET_CURRENT_PATIENT_START,
  SET_CURRENT_PATIENT_SUCCESS,
} from './constants';

export function loadRecords() {
  return {
    type: LOAD_RECORDS_START,
  };
}

export function loadRecordsSuccess(data) {
  return {
    type: LOAD_RECORDS_SUCCESS,
    payload: data,
  };
}

export function loadRecordsError(error) {
  return {
    type: LOAD_RECORDS_ERROR,
    error,
  };
}

export function setPractitioner(id) {
  return {
    type: SET_PRACTITIONER_START,
    id,
  };
}
export function setPractitionerSuccess(id) {
  return {
    type: SET_PRACTITIONER_SUCCESS,
    id,
  };
}

export function setPatientId(id) {
  return {
    type: SET_CURRENT_PATIENT_START,
    id,
  };
}

export function setPatientIdSuccess(id) {
  return {
    type: SET_CURRENT_PATIENT_SUCCESS,
    id,
  };
}
