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
import { makeSelectPatientsRecordsByPractitioner } from '../App/selectors';
import globalReducer from '../App/reducer';
import saga from '../App/saga';
import { loadRecords } from '../App/actions';
import Table from '../../components/Table';

export function PatientsPage({ practRecords, history, location }) {
  useInjectReducer({ key: 'global', reducer: globalReducer });
  useInjectSaga({ key: 'global', saga });

  useEffect(() => {
    loadRecords();
    if (practRecords.length === 0) {
      history.push('/');
    }
  }, [practRecords]);

  return (
    <div>
      <Table
        headData={['Name', 'Birthday', 'Diabetes type', '']}
        rowData={practRecords}
        allowedAttrs={['fullname', 'dateOfBirth', 'diabetesType']}
        buttonColumnText="Patient Profile"
        buttonColumnHrefId="patientId"
        path={location.pathname}
      />
    </div>
  );
}

PatientsPage.propTypes = {
  practRecords: PropTypes.array,
  history: PropTypes.object,
  location: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  practRecords: makeSelectPatientsRecordsByPractitioner(),
});

const mapDispatchToProps = dispatch => ({
  loadRecords: () => dispatch(loadRecords()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  // memo,
  withConnect,
)(PatientsPage);
