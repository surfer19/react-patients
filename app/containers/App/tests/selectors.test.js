import {
  makeSelectPatientsRecords,
  makeSelectPractitionerId,
} from '../selectors';
describe('Home Selectors', () => {
  const globalState = {
    patientsRecords: [
      {
        patientId: '5cc17bd0a75e3173228f1684',
        practitionerId: '2588ac7f57fd9b49',
      },
      {
        patientId: '5cc17bd0a75e3173228f1684',
        practitionerId: '2588ac7f57fd9b49',
      },
      {
        patientId: '5cc17bd0a75e3173228f123',
        practitionerId: '2588ac7f57fd9b12',
      },
    ],
    practitionerId: '2588ac7f57fd9b12',
  };
  const mockedState = {
    global: globalState,
  };

  describe('selectPatientsRecords', () => {
    it('should select all patient records', () => {
      const selectRecords = makeSelectPatientsRecords.resultFunc(mockedState);
      // record exact match
      expect(selectRecords).toEqual(globalState.patientsRecords);
    });
  });

  describe('selectPractitionerId', () => {
    it(`should select practitionerId
      ${globalState.patientsRecords[2].practitionerId}
      if he has assigned at least 1 record`, () => {
      const id = globalState.patientsRecords[2].practitionerId;
      const selectedPractitioner = makeSelectPractitionerId.resultFunc(
        mockedState.global.patientsRecords,
        id,
      );
      expect(selectedPractitioner).toEqual(id);
    });

    it('should returns null when practitionerId does not exists', () => {
      const selectedPractitioner = makeSelectPractitionerId.resultFunc(
        mockedState.global.patientsRecords,
        123456,
      );
      expect(selectedPractitioner).toEqual(null);
    });
  });
});
