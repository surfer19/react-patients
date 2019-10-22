/*
 *
 * HomePage actions
 *
 */

import {
  LOAD_RECORDS_START,
  LOAD_RECORDS_SUCCESS,
  LOAD_RECORDS_ERROR,
  GET_PRACTITIONER_START,
  GET_PRACTITIONER_SUCCESS,
  GET_PRACTITIONER_NOT_EXIST,
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

export function getPractitioner(id) {
  return {
    type: GET_PRACTITIONER_START,
    id,
  };
}

export function getPractitionerSuccess(id) {
  return {
    type: GET_PRACTITIONER_SUCCESS,
    id,
  };
}

export function getPractitionerNotExist() {
  return {
    type: GET_PRACTITIONER_NOT_EXIST,
  };
}
