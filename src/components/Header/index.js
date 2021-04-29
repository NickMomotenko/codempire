import React from "react";

import styled from "styled-components";

import Text from "../../UI/Text";

const HeaderWrapp = styled.header``;

const Header = ({ location, activeName }) => {
  let headerText =
    location.pathname === "/"
      ? "Бургеры из меню Mc'donalds"
      : `Редактирование бургера ${activeName}`;

  return (
    <HeaderWrapp>
      <Text text={headerText} />
    </HeaderWrapp>
  );
};

export default Header;
