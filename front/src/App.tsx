import React from 'react';
import styled from '@emotion/styled';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import Header from './components/common/Header';
import RegisterPage from './components/pages/RegisterPage';

const Wrapper = styled.div`
  width: 1024px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

function App() {
  return (
    <>
      <Wrapper>
        <Header />
      </Wrapper>

      <Wrapper>
        <Switch>
          <Route exact component={HomePage} path="/" />
          <Route exact component={RegisterPage} path="/signup" />
        </Switch>
      </Wrapper>
    </>
  );
}

export default App;
