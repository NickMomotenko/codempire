import React from "react";

import styled from "styled-components";

import { Link, useLocation } from "react-router-dom";

import Text from "../../UI/Text";
import Image from "../../UI/Image";
import Counter from "../../UI/Counter";

const ItemWrapp = styled.div`
  width: 25%;
  display: inline-block;
  text-align: center;

  &:hover {
    box-shadow: 0 0 5px #dbdbe6;
  }
`;

const Item = ({ item, onClick, ...props }) => {
  let { name, icon, id } = item;

  let location = useLocation();

  let optionsFlag = location.pathname === "/" ? false : true;

  return (
    <ItemWrapp {...props}>
      <Link to={`/${id}`} onClick={onClick}>
        <Image url={icon} alt={name} />
        <Text text={name} />
      </Link>
      <Counter />
    </ItemWrapp>
  );
};

export default Item;
