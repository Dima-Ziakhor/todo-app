import styled from 'styled-components';

const StyledHeaderComponent = styled.header`
  padding: 1rem 0;
`;

const StyledHeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledHeaderList = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;

  & li {
    display: block;
  }
`;

export const StyledHeader = Object.assign(StyledHeaderComponent, {
  Wrapper: StyledHeaderWrapper,
  List: StyledHeaderList,
});
