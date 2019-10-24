/**
 *
 * Graph
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { makeSelectPatientByPatientId } from '../../containers/App/selectors';

function Graph({ patientRecord }) {
  console.log('patientRecord', patientRecord);
  return <h1>a</h1>;
}

Graph.propTypes = {
  patientRecord: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  patientRecord: makeSelectPatientByPatientId(),
});

export default connect(mapStateToProps)(Graph);
