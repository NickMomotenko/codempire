import React from "react";

import styled from "styled-components";

import { withData } from "../../context/data";

import Text from "../../UI/Text";
import { Block } from "../../UI/Layout";

const MainWrapp = styled.main``;

const Main = (props) => {
  let { data } = props;

  return (
    <MainWrapp>
      {data?.map((item) => (
        <Block key={item.id}>
          <Text text={item.name} />
        </Block>
      ))}
    </MainWrapp>
  );
};

export default withData(Main);
