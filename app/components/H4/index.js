/**
 *
 * H4
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import StyledH4 from './StyledH4';

function H4(props) {
  return <StyledH4 grey={props.grey}>{props.children}</StyledH4>;
}

H4.propTypes = {
  children: PropTypes.string,
  grey: PropTypes.bool,
};

export default H4;
