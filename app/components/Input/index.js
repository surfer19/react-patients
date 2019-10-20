/**
 *
 * Input
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

function Input(props) {
  return (
    <div className="form-group mt-4">
      <label htmlFor="input">{props.label}</label>
      <input
        className="form-control"
        id="input"
        aria-describedby="help"
        placeholder={props.placeholder}
        onChange={e => props.onChange(e.target.value)}
      />
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
