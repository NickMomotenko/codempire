import React, { useState } from "react";

import styled from "styled-components";

import { Route, useLocation } from "react-router-dom";

import { withData } from "./context/data";

import Header from "./components/Header";
import Main from "./components/Main";
import Busket from "./components/Busket";
import Container from "./components/Container";

import Item from "./UI/Item";

const AppWrapp = styled.div``;

const App = (props) => {
  let { activeBurger , changeActiveBurger} = props

  const location = useLocation();

  return (
    <AppWrapp>
      <Container>
        <Header location={location} activeName={activeBurger?.name} />
        <Route exact path="/">
          <Main changeActive={changeActiveBurger} />
        </Route>
        <Route exact path={`/${activeBurger?.id}`}>
          <Item item={activeBurger} />
        </Route>
        <Route exact path="/busket">
          <Busket />
        </Route>
      </Container>
    </AppWrapp>
  );
};

export default withData(App);
