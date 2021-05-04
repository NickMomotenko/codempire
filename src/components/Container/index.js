import React from "react";

import styled from "styled-components";

const ContainerWrapp = styled.div`
  width: 1100px;
  margin: 0 auto;
`;

const Container = ({ children }) => {
  return <ContainerWrapp>{children}</ContainerWrapp>;
};

export default Container;
