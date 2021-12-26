import styled from 'styled-components';

export const MapWrapper = styled.div`
  display: flex;
  height: calc(100vh - 198px);
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;
