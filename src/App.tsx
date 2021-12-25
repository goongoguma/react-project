import React from 'react';
import './global.css';
import styled from 'styled-components';
import HeaderView from '@components/header/header.view';
import Main from './views/main';

const GlobalContainer = styled.div`
  background: #141414;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  width: 1180px;
  margin: 0 auto;
  background: skyblue;
`;

const Wrapper = styled.div`
  background: pink;
`;

const App = () => {
  return (
    <GlobalContainer>
      <AppContainer>
        <HeaderView />
        <Wrapper>
          <Main />
        </Wrapper>
      </AppContainer>
    </GlobalContainer>
  );
};

export default App;
