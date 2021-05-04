import React from "react";

import styled from "styled-components";

import { useHistory } from "react-router";

import { withData } from "../../context/data";

import { Row } from "../../UI/Layout";
import Item from "../../UI/Item";
import Button from "../../UI/Button";

const MainWrapp = styled.main``;

const MainList = styled(Row)`
  flex-wrap: wrap;
`;

const Main = (props) => {
  let { data, changeActive } = props;


  return (
    <MainWrapp>
      <MainList as="ul" center>
        {data?.menu?.map((item) => (
          <Item
            key={item.id}
            as="li"
            item={item}
            onClick={() => changeActive(item)}
          />
        ))}
      </MainList>
    </MainWrapp>
  );
};

export default withData(Main);
