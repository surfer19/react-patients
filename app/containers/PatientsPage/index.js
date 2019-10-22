/**
 *
 * PatientsPage
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectPatientsPage from './selectors';
import reducer from './reducer';
import saga from './saga';

export function PatientsPage() {
  useInjectReducer({ key: 'patientsPage', reducer });
  useInjectSaga({ key: 'patientsPage', saga });

  return <div />;
}

// PatientsPage.propTypes = {
// dispatch: PropTypes.func,
// };

const mapStateToProps = createStructuredSelector({
  patientsPage: makeSelectPatientsPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(PatientsPage);
