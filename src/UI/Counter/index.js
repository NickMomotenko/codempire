import React, { useState, useEffect } from "react";

import styled from "styled-components";

import Button from "../Button";
import { Row } from "../Layout";

const CounterWrapp = styled.div``;

const CounterValue = styled.div``;

const Counter = ({ incrementCounter, decrementCounter, count }) => {
  return (
    <CounterWrapp>
      <Row>
        <Button text="-" onClick={decrementCounter} circle size={20} />
        <CounterValue>{count}</CounterValue>
        <Button text="+" onClick={incrementCounter} circle size={20} />
      </Row>
    </CounterWrapp>
  );
};

export default Counter;
