import React from "react";

import styled from "styled-components";

import { withData } from "./context/data";

import Header from "./components/Header";
import Main from "./components/Main";

const AppWrapp = styled.div``;

const App = (props) => {
  return (
    <AppWrapp>
      <Header />
      <Main />
    </AppWrapp>
  );
};

export default withData(App);
