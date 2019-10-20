/**
 *
 * Alert
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

function Alert(props) {
  const show = props.show ? '' : 'd-none';
  return (
    // colorTypes = primary, secondary, success, danger, warning, info
    <div className={`${show} alert alert-${props.colorType}`} role="alert">
      {props.text}
    </div>
  );
}

Alert.propTypes = {
  colorType: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  show: PropTypes.bool,
};

export default Alert;
