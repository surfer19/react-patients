/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useInjectReducer from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { connect } from 'react-redux';
import { compose } from 'redux';
import reducer from './reducer';
import saga from './saga';
import H3 from '../../components/H3';
import H4 from '../../components/H4';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Alert from '../../components/Alert';
import { loadRecords, getPractitioner } from './actions';
const key = 'homePage';

function HomePage(props) {
  useInjectSaga({ key, saga });
  const [inputId, setInputId] = useState(''); // '' is the initial state value

  useEffect(() => {
    props.loadRecords();
  }, []);

  return (
    <div className="row align-items-center h-100">
      <div className="col-6 mx-auto">
        <div className="jumbotron">
          <H3 primary>Search for patients</H3>
          <H4 grey>Enter the doctor id</H4>
          <Input
            label="Doctor ID"
            onChange={value => setInputId(value)}
            placeholder="Doctor ID"
          />
          {/* error message */}
          <Alert
            show={!props.practitionerId}
            colorType="danger"
            text="Incorrect doctor ID"
          />
          <Button colorType="primary" onClick={props.onClick(inputId)} right>
            Find
          </Button>
        </div>
      </div>
    </div>
  );
}
HomePage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  loadRecords: PropTypes.func,
  onClick: PropTypes.func,
  practitionerId: PropTypes.string,
};

const mapStateToProps = state => ({
  practitionerId: state.homePage.practitionerId,
});

const mapDispatchToProps = dispatch => ({
  loadRecords: () => dispatch(loadRecords()),
  onClick: id => e => {
    // selectPractitionerId(state, id)
    e.preventDefault();
    dispatch(getPractitioner(id));
  },
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = useInjectReducer({ key, reducer });

export default compose(
  // Put `withReducer` before `withConnect`
  withReducer,
  withConnect,
)(HomePage);
