import React, { useState } from "react";

import styled from "styled-components";

import { Route, useLocation } from "react-router-dom";

import { withData } from "./context/data";

import Header from "./components/Header";
import Main from "./components/Main";
import Busket from "./components/Busket";

import Item from "./UI/Item";

const AppWrapp = styled.div``;

const App = () => {
  const [active, setActive] = useState(null);

  const location = useLocation();

  const changeActive = (item) => {
    setActive(item);
  };

  return (
    <AppWrapp>
      <Header location={location} activeName={active?.name} />
      <Route exact path="/">
        <Main changeActive={changeActive} />
      </Route>
      <Route exact path="/1">
        <Item item={active} />
      </Route>
      <Route exact path="/busket">
        <Busket />
      </Route>
    </AppWrapp>
  );
};

export default withData(App);
