import React from "react";

import styled from "styled-components";

import Text from "../../UI/Text";

const HeaderWrapp = styled.header``;

const Header = ({ location, activeName }) => {
  let headerText = "";

  if (location.pathname == "/busket") {
    headerText = "Корзина";
  } else if (location.pathname == "/") {
    headerText = "Бургеры из меню Mc'donalds";
  } else {
    headerText = `Редактирование бургера ${activeName}`;
  }

  return (
    <HeaderWrapp>
      <Text text={headerText} />
    </HeaderWrapp>
  );
};

export default Header;
