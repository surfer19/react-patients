/**
 *
 * Button
 *
 */

import React, { Children } from 'react';
import PropTypes from 'prop-types';
// colorType options: primary, secondary, success, danger, warning, info, light, dark, link
function Button(props) {
  const right = props.right ? 'float-right' : '';
  const type = props.colorType ? props.colorType : 'primary';
  return (
    <button
      onClick={props.onClick}
      className={`btn btn-${type} ${right}`}
      type="button"
    >
      {Children.toArray(props.children)}
    </button>
  );
}

Button.propTypes = {
  colorType: PropTypes.string,
  children: PropTypes.node.isRequired,
  right: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
