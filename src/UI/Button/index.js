import React from "react";

import styled from "styled-components";

const ButtonWrapp = styled.button``;

const Button = ({ text, ...props }) => {
  return <ButtonWrapp {...props}>{text && text}</ButtonWrapp>;
};

export default Button;
