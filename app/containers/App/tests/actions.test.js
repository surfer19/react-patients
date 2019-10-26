import {
  LOAD_RECORDS_START,
  LOAD_RECORDS_SUCCESS,
  LOAD_RECORDS_ERROR,
  SET_PRACTITIONER_START,
  SET_PRACTITIONER_SUCCESS,
  SET_CURRENT_PATIENT_START,
  SET_CURRENT_PATIENT_SUCCESS,
} from '../constants';
import {
  loadRecords,
  loadRecordsSuccess,
  loadRecordsError,
  setPractitioner,
  setPractitionerSuccess,
  setPatientId,
  setPatientIdSuccess,
} from '../actions';

describe('AppActions', () => {
  const id = '123456';
  const error = {};
  const mockedRecords = [
    {
      patientId: '5cc17bd0a75e3173228f1684',
      practitionerId: '2588ac7f57fd9b49',
      name: 'Wilson',
      surname: 'Wade',
    },
    {
      patientId: '5cc17bd0a5283537f6c20a4a',
      practitionerId: 'a7e46537714eca83',
      name: 'Bridges',
      surname: 'Odom',
    },
  ];
  it('should return the correct constant for loadRecords', () => {
    expect(loadRecords()).toEqual({
      type: LOAD_RECORDS_START,
    });
  });

  it('should return the correct constant and data for loadRecordsSuccess', () => {
    expect(loadRecordsSuccess(mockedRecords)).toEqual({
      type: LOAD_RECORDS_SUCCESS,
      payload: mockedRecords,
    });
  });

  it('should return the correct constant and data for loadRecordsError', () => {
    expect(loadRecordsError(error)).toEqual({
      type: LOAD_RECORDS_ERROR,
      error,
    });
  });

  it('should return the correct constant and data for setPractitioner', () => {
    expect(setPractitioner(id)).toEqual({
      type: SET_PRACTITIONER_START,
      id,
    });
  });

  it('should return the correct constant and data for setPractitionerSuccess', () => {
    expect(setPractitionerSuccess(id)).toEqual({
      type: SET_PRACTITIONER_SUCCESS,
      id,
    });
  });

  it('should return the correct constant and data for setPatientId', () => {
    expect(setPatientId(id)).toEqual({
      type: SET_CURRENT_PATIENT_START,
      id,
    });
  });

  it('should return the correct constant and data for setPatientIdSuccess', () => {
    expect(setPatientIdSuccess(id)).toEqual({
      type: SET_CURRENT_PATIENT_SUCCESS,
      id,
    });
  });
});
