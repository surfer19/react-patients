import { createSelector } from 'reselect';

const selectPatientsRecords = state => state.home.patientsRecords;
const selectId = (state, id) => id;
// returns id or null
const selectPractitionerId = createSelector(
  [selectPatientsRecords, selectId],
  (records, id) => {
    const foundRecord = records.find(record => record.practitionerId === id);
    return foundRecord ? foundRecord.practitionerId : null;
  },
);

export { selectPatientsRecords, selectPractitionerId };
