import React from "react";

import styled, { css } from "styled-components";

const ButtonWrapp = styled.button`
  display: inline-block;

  color: #fff;
  background-color: blue;
  font-size: 18px;
  padding: 5px 10px;
  border-radius: 10px;

  ${(props) =>
    props.circle &&
    css`
      height: ${(props) => `${props.size}px` || "initial"};
      width: ${(props) => `${props.size}px` || "initial"};
      padding: 2px;
      border-radius: 50%;
      line-height: 15px;
    `}
`;

const Button = ({ text, ...props }) => {
  return <ButtonWrapp {...props}>{text && text}</ButtonWrapp>;
};

export default Button;
