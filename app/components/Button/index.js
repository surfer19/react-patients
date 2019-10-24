/**
 *
 * Button
 *
 */

import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// colorType options: primary, secondary, success, danger, warning, info, light, dark, link
function Button({ colorType, children, right, onClick, href }) {
  const positionRight = right ? 'float-right' : '';
  const type = colorType || 'primary';
  const button = (
    <button
      onClick={onClick}
      className={`btn btn-${type} ${positionRight}`}
      type="button"
    >
      {Children.toArray(children)}
    </button>
  );

  if (href) {
    return <Link to={href}>{button}</Link>;
  }
  return button;
}

Button.propTypes = {
  colorType: PropTypes.string,
  children: PropTypes.node.isRequired,
  right: PropTypes.bool,
  onClick: PropTypes.func,
  href: PropTypes.string,
};

export default Button;
