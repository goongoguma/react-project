import styled from 'styled-components';

export const BottomnavWrapper = styled.ul`
  display: none;
  margin: 0;
  padding: 0;
  @media (max-width: 1024px) {
    display: flex;
    background: chartreuse;
    padding: 0;
    overflow: auto;
  }
`;
