import styled from 'styled-components';

export const SidenavWrapper = styled.ul`
  background: cadetblue;
  flex: 1;
  padding: 0;
  margin: 0;
  overflow: auto;
  @media (max-width: 1024px) {
    display: none;
  }
`;
