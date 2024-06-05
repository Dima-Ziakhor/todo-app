import styled from 'styled-components';


export const StyledLogo = styled.a<{width?: string, height?: string}>`
  display: block;
  width: ${(props) => props.width || '4rem'};
  height: ${(props) => props.height || '4rem'};;
  text-decoration: none;
  background-color: #000;
`;
