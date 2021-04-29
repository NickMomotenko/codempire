import React from "react";

import styled from "styled-components";

import Text from "../../UI/Text";

const HeaderWrapp = styled.header``;

const Header = () => {
  return (
    <HeaderWrapp>
      <Text text="Бургеры из меню Mc'donalds" />
    </HeaderWrapp>
  );
};

export default Header;
