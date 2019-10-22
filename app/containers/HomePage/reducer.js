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
  GET_PRACTITIONER_START,
  GET_PRACTITIONER_SUCCESS,
  GET_PRACTITIONER_NOT_EXIST,
} from './constants';

export const initialState = {
  patientsRecords: [],
  practitionerId: '',
};

/* eslint-disable default-case, no-param-reassign */
const homePageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_RECORDS_START:
        break;
      case LOAD_RECORDS_SUCCESS:
        draft.patientsRecords = action.payload;
        break;
      case LOAD_RECORDS_ERROR:
        break;
      case GET_PRACTITIONER_START:
        break;
      case GET_PRACTITIONER_SUCCESS:
        draft.practitionerId = action.id;
        break;
      case GET_PRACTITIONER_NOT_EXIST:
        draft.practitionerId = false;
        break;
    }
  });

export default homePageReducer;
