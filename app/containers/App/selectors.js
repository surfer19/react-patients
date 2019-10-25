import { createSelector } from 'reselect';

const makeSelectPatientsRecords = createSelector(
  state => state.global.patientsRecords,
);

// returns id or null
const makeSelectPractitionerId = createSelector(
  state => state.global.patientsRecords,
  state => state.global.practitionerId,
  (records, id) => {
    const foundRecord = records.find(record => record.practitionerId === id);
    return foundRecord ? foundRecord.practitionerId : null;
  },
);

const makeSelectPatientsRecordsByPractitioner = createSelector(
  state => state.global.patientsRecords,
  state => state.global.practitionerId,
  (statik, practId) =>
    statik.filter(record => record.practitionerId === practId),
);

const makeSelectPatientByPatientId = createSelector(
  state => state.global.patientsRecords,
  state => state.global.patientId,
  (records, patientId) =>
    records.filter(record => record.patientId === patientId),
);

export {
  makeSelectPatientsRecords,
  makeSelectPractitionerId,
  makeSelectPatientsRecordsByPractitioner,
  makeSelectPatientByPatientId,
};
