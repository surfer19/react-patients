import styled, { css } from 'styled-components';

const H3Styles = css`
  font-size: 1.7em;
  color: ${props => (props.primary ? '#EB3B5A' : '#000')};
`;

const StyledH3 = styled.h3`
  ${H3Styles};
`;

export default StyledH3;
