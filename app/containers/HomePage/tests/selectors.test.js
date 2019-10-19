import { selectPatientsRecords, selectPractitionerId } from '../selectors';
describe('Home Selectors', () => {
  const homeState = {
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
  };
  const mockedState = {
    home: homeState,
  };

  describe('selectPatientsRecords', () => {
    it('should select all patient records', () => {
      const selectRecords = selectPatientsRecords(mockedState);
      // record exact match
      expect(selectRecords).toEqual(homeState.patientsRecords);
    });
  });

  describe('selectPractitionerId', () => {
    it(`should select practitionerId
      ${homeState.patientsRecords[2].practitionerId}
      if he has assigned at least 1 record`, () => {
      const id = homeState.patientsRecords[2].practitionerId;

      expect(selectPractitionerId(mockedState, id)).toEqual(id);
    });

    it('should returns null when practitionerId does not exists', () => {
      expect(selectPractitionerId(mockedState, 123)).toEqual(null);
    });
  });
});
