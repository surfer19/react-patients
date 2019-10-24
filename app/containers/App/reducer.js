/*
 *
 * HomePage reducer
 *
 */
import produce from 'immer';
import {
  LOAD_RECORDS_START,
  LOAD_RECORDS_SUCCESS,
  LOAD_RECORDS_ERROR,
  SET_PRACTITIONER_START,
  SET_PRACTITIONER_SUCCESS,
} from './constants';

export const initialState = {
  patientsRecords: [],
  practitionerId: '',
};

/* eslint-disable default-case, no-param-reassign */
const globalReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_RECORDS_START:
        break;
      case LOAD_RECORDS_SUCCESS:
        draft.patientsRecords = action.payload;
        break;
      case LOAD_RECORDS_ERROR:
        break;
      case SET_PRACTITIONER_START:
        draft.practitionerId = action.id;
        break;
      case SET_PRACTITIONER_SUCCESS:
        draft.practitionerId = action.id;
        break;
    }
  });

export default globalReducer;
