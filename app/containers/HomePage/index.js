/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useInjectReducer from 'utils/injectReducer';
import { createStructuredSelector } from 'reselect';
import { useInjectSaga } from 'utils/injectSaga';
import { connect } from 'react-redux';
import { compose } from 'redux';
import H3 from '../../components/H3';
import H4 from '../../components/H4';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Alert from '../../components/Alert';
import { loadRecords, setPractitioner } from '../App/actions';
import { makeSelectPractitionerId } from '../App/selectors';
import saga from '../App/saga';
import reducer from '../App/reducer';
const key = 'global';

function HomePage(props) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const [inputId, setInputId] = useState(''); // '' is the initial state value
  const [showAlert, setshowAlert] = useState(false);
  const [initialState, setInitialState] = useState(true);

  useEffect(() => {
    props.loadRecords();
    if (initialState) {
      setInitialState(false);
    } else {
      props.history.push('/patients');
    }
  }, [props.practitionerId]);

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
            show={showAlert}
            colorType="danger"
            text="Incorrect doctor ID"
          />
          <Button
            colorType="primary"
            onClick={props.onClick(inputId, props, setshowAlert)}
            right
          >
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
  practitionerId: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

const mapStateToProps = createStructuredSelector({
  practitionerId: makeSelectPractitionerId,
});

const mapDispatchToProps = dispatch => ({
  disp: val => dispatch(val),
  loadRecords: () => dispatch(loadRecords()),
  onClick: (id, props, setshowAlert) => e => {
    e.preventDefault();
    dispatch(setPractitioner(id));
    if (props.practitionerId === null) {
      setshowAlert(true);
    } else {
      props.history.push('/patients');
    }
  },
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(HomePage);
