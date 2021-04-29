import React, { useState, useEffect } from "react";

import styled from "styled-components";

import Button from "../Button";

const CounterWrapp = styled.div``;

const CounterValue = styled.div``;

const Counter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter <= 0) {
      setCounter(0);
    }
  }, [counter]);

  return (
    <CounterWrapp>
      <Button
        text="-"
        onClick={() => setCounter((prev) => prev - 1)}
        circle
        size={20}
      />
      <CounterValue>{counter}</CounterValue>
      <Button
        text="+"
        onClick={() => setCounter((prev) => prev + 1)}
        circle
        size={20}
      />
    </CounterWrapp>
  );
};

export default Counter;
