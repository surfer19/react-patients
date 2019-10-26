import globalReducer from '../reducer';
import {
  loadRecords,
  loadRecordsSuccess,
  loadRecordsError,
  setPractitioner,
  setPractitionerSuccess,
  setPatientId,
  setPatientIdSuccess,
} from '../actions';

describe('globalReducer', () => {
  const id = '123456';
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
  it('returns the initial state', () => {
    expect(globalReducer(undefined, {})).toMatchSnapshot();
  });

  it('handles the loadRecords action', () => {
    expect(globalReducer({}, loadRecords())).toMatchSnapshot();
  });

  it('handles the loadRecordsSuccess action', () => {
    expect(
      globalReducer({}, loadRecordsSuccess(mockedRecords)),
    ).toMatchSnapshot();
  });

  it('handles the loadRecordsError action', () => {
    expect(globalReducer({}, loadRecordsError())).toMatchSnapshot();
  });

  it('handles the setPractitioner action', () => {
    expect(globalReducer({}, setPractitioner(id))).toMatchSnapshot();
  });

  it('handles the setPractitionerSuccess action', () => {
    expect(globalReducer({}, setPractitionerSuccess(id))).toMatchSnapshot();
  });

  it('handles the setPatientId action', () => {
    expect(globalReducer({}, setPatientId(id))).toMatchSnapshot();
  });

  it('handles the setPatientIdSuccess action', () => {
    expect(globalReducer({}, setPatientIdSuccess(id))).toMatchSnapshot();
  });
});
