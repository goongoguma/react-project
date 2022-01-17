import React from 'react';
import styled from 'styled-components';
import HeaderView from '@components/header/header.view';
import { QueryClient, QueryClientProvider } from 'react-query';
import Normalize from './globalStyles/Normalize';
import View from './View';

const GlobalContainer = styled.div`
  background: #141414;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  width: 1180px;
  margin: 0 auto;
  background: skyblue;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const Wrapper = styled.div`
  background: pink;
`;

const queryClient = new QueryClient();

const App = () => {
  return (
    <GlobalContainer>
      <Normalize />
      <QueryClientProvider client={queryClient}>
        <AppContainer>
          <HeaderView />
          <Wrapper>
            <View />
          </Wrapper>
        </AppContainer>
      </QueryClientProvider>
    </GlobalContainer>
  );
};

export default App;
