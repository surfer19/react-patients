/**
 *
 * PatientsPage
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {
  makeSelectPatientsRecordsByPractitioner,
  makeSelectPractitionerId,
} from '../App/selectors';
import globalReducer from '../App/reducer';
import saga from '../App/saga';
import { loadRecords, setPatientId } from '../App/actions';
import Table from '../../components/Table';
import Button from '../../components/Button';

export function PatientsPage({
  practRecords,
  practitionerId,
  history,
  location,
  setPatientId: setCurrentPatientId,
}) {
  useInjectReducer({ key: 'global', reducer: globalReducer });
  useInjectSaga({ key: 'global', saga });

  useEffect(() => {
    loadRecords();
    if (practRecords.length === 0) {
      history.push('/');
    }
  }, [practRecords]);

  function onColBtnClick(id, e) {
    e.preventDefault();
    // set to state / select clicked patient
    setCurrentPatientId(id);
    history.push(`/patients/${id}`);
  }

  return (
    <div>
      <div className="row mt-3 mb-3">
        <div className="col-12">
          <span>
            <strong>DoctorID:</strong> {practitionerId}
          </span>
          <Button href="/" colorType="danger" right>
            Logout
          </Button>
        </div>
      </div>
      <Table
        headData={['Name', 'Birthday', 'Diabetes type', '']}
        rowData={practRecords}
        allowedAttrs={['fullname', 'dateOfBirth', 'diabetesType']}
        buttonColumnText="Patient Profile"
        buttonColumnHrefId="patientId"
        path={location.pathname}
        onColBtnClick={(id, e) => onColBtnClick(id, e)}
      />
    </div>
  );
}

PatientsPage.propTypes = {
  practRecords: PropTypes.array,
  history: PropTypes.object,
  location: PropTypes.object,
  setPatientId: PropTypes.func,
  practitionerId: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  practRecords: makeSelectPatientsRecordsByPractitioner(),
  practitionerId: makeSelectPractitionerId(),
});

const mapDispatchToProps = dispatch => ({
  loadRecords: () => dispatch(loadRecords()),
  setPatientId: id => dispatch(setPatientId(id)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  // memo,
  withConnect,
)(PatientsPage);
