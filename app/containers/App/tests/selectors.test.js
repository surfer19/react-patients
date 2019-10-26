import {
  makeSelectPatientsRecords,
  makeSelectPractitionerId,
  makeSelectPatientsRecordsByPractitioner,
  makeSelectPatientByPatientId,
} from '../selectors';

describe('App Selectors', () => {
  const practitionerId = '2588ac7f57fd9b49';
  const practitionerId2 = '2588ac7f57fd9b12';
  const patientId = '5cc17bd0a75e3173228f1683';
  const globalState = {
    patientsRecords: [
      {
        patientId: '5cc17bd0a75e3173228f1684',
        practitionerId: '2588ac7f57fd9b49',
      },
      {
        patientId: '5cc17bd0a75e3173228f1683',
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

  describe('makeSelectPatientsRecords', () => {
    it('should select all patient records', () => {
      const selectRecords = makeSelectPatientsRecords.resultFunc(mockedState);
      // record exact match
      expect(selectRecords).toEqual(globalState.patientsRecords);
    });
  });

  describe('makeSelectPractitionerId', () => {
    it(`should select practitionerId
      ${practitionerId2}
      if he has assigned at least 1 record`, () => {
      const id = practitionerId2;
      const selectedPractitioner = makeSelectPractitionerId.resultFunc(
        mockedState.global.patientsRecords,
        id,
      );
      expect(selectedPractitioner).toEqual(id);
    });

    it('should return null when practitionerId does not exists', () => {
      const selectedPractitioner = makeSelectPractitionerId.resultFunc(
        mockedState.global.patientsRecords,
        123456,
      );
      expect(selectedPractitioner).toEqual(null);
    });
  });

  describe('makeSelectPatientsRecordsByPractitioner', () => {
    it('should select correct patients connected to practitionerId', () => {
      const expectedResult = [
        {
          patientId: '5cc17bd0a75e3173228f1684',
          practitionerId: '2588ac7f57fd9b49',
        },
        {
          patientId: '5cc17bd0a75e3173228f1683',
          practitionerId: '2588ac7f57fd9b49',
        },
      ];
      const selectedRecords = makeSelectPatientsRecordsByPractitioner.resultFunc(
        mockedState.global.patientsRecords,
        practitionerId,
      );
      expect(selectedRecords).toEqual(expectedResult);
    });

    it('shouldnt select any patients with incorrect ID', () => {
      const selectedRecords = makeSelectPatientsRecordsByPractitioner.resultFunc(
        mockedState.global.patientsRecords,
        '123456', // incorrect id
      );
      expect(selectedRecords).toEqual([]);
    });
  });

  describe('makeSelectPatientByPatientId', () => {
    it('should select patient by patientId', () => {
      const expectedResult = [
        {
          patientId: '5cc17bd0a75e3173228f1683',
          practitionerId: '2588ac7f57fd9b49',
        },
      ];
      const selectedPatient = makeSelectPatientByPatientId.resultFunc(
        mockedState.global.patientsRecords,
        patientId,
      );
      expect(selectedPatient).toEqual(expectedResult);
    });

    it('shouldnt select any patient with incorrect patientId', () => {
      const selectedPatient = makeSelectPatientByPatientId.resultFunc(
        mockedState.global.patientsRecords,
        '123456', // incorrect id
      );
      expect(selectedPatient).toEqual([]);
    });
  });
});
