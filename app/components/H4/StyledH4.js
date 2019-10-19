import styled, { css } from 'styled-components';

const H4Styles = css`
  font-size: 1.4em;
  color: ${props => (props.grey ? '#908c8c' : '000')};
  font-weight: 400;
`;

const StyledH4 = styled.h4`
  ${H4Styles};
`;

export default StyledH4;
