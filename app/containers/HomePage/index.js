/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { selectPractitionerId } from './selectors';
import H3 from '../../components/H3';
import H4 from '../../components/H4';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Alert from '../../components/Alert';

export default function HomePage(props) {
  const [inputId, setInputId] = useState(''); // '' is the initial state value
  const [showErrorMessage, setshowErrorMessage] = useState(false);

  function clickHandler(e) {
    e.preventDefault();
    // is inputId valid?
    if (!isPractitionerIdValid(inputId)) {
      return setshowErrorMessage(true);
    }
    // redirect to list
    props.history.push(`/patients`);
    return setshowErrorMessage(false);
  }

  function isPractitionerIdValid(id) {
    return selectPractitionerId(mockedState, id) ? true : false;
  }

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
            show={showErrorMessage}
            colorType="danger"
            text="Incorrect doctor ID"
          />
          <Button colorType="primary" onClick={clickHandler} right>
            Find
          </Button>
        </div>
      </div>
    </div>
  );
}
HomePage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

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
