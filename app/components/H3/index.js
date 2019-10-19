/**
 *
 * H3
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import StyledH3 from './StyledH3';

function H3(props) {
  return <StyledH3 primary={props.primary}>{props.children}</StyledH3>;
}
H3.propTypes = {
  children: PropTypes.string,
  primary: PropTypes.bool,
};

export default H3;
