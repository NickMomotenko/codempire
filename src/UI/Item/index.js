import React, { useState } from "react";

import styled from "styled-components";

import { v4 as uuid } from "uuid";

import { Link, useHistory, useLocation } from "react-router-dom";

import { useCheckbox } from "../../hooks/checkbox";

import Text from "../Text";
import Image from "../Image";
import Counter from "../Counter";
import { Block, Column, Row } from "../Layout";
import Checkbox from "../Checkbox";

import Button from "../Button";
import { withData } from "../../context/data";

const ItemWrapp = styled.div`
  width: 25%;
  display: inline-block;
  text-align: center;
`;

const ItemLink = styled(Link)`
  display: block;
  padding: 5px;

  &:hover {
    box-shadow: 0 0 5px #dbdbe6;
  }
`;

const Item = ({ item, onClick, ...props }) => {
  const [options, setOptions] = useState([
    { id: 1, title: "Бекон", count: 1, checked: false },
    { id: 2, title: "Соус", count: 1, checked: false },
    { id: 3, title: "Булка", count: 1, checked: false },
    { id: 4, title: "Сыр", count: 1, checked: false },
  ]);

  let checkbox = useCheckbox();

  let { addOrder } = props;

  let location = useLocation();
  let history = useHistory();

  let optionsFlag = location.pathname !== "/" && true;

  let isBurgerPageWithId = location.pathname == `/${item?.id}` && true;

  const incrementCounter = (id) => {
    let arr = options.map((item) => {
      if (item.id === id) {
        if (item.count >= 0) {
          item.count = item.count + 1;
          item.checked = false;
        }
      }

      return item;
    });

    setOptions([...arr]);
  };

  const decrementCounter = (id) => {
    let arr = options.map((item) => {
      if (item.id === id) {
        if (item.count <= 1) {
          item.count = 0;
          item.checked = true;
        } else {
          item.count = item.count - 1;
        }
      }

      return item;
    });

    setOptions([...arr]);
  };

  const checkedStatus = (id) => {
    let arr = options.map((item) => {
      if (item.id === id) {
        if (item.checked) {
          item.checked = false;
          item.count = 1;
        } else if (!item.checked) {
          item.checked = true;
          item.count = 0;
        }
      }

      return item;
    });

    setOptions(arr);
  };

  return (
    <ItemWrapp {...props}>
      <Block>
        <ItemLink to={`/${item?.id}`} onClick={onClick}>
          <Image url={item?.icon} alt={item?.name} style={{ width: 150 }} />
          <Text text={item?.name} />
        </ItemLink>
        {optionsFlag && (
          <Block style={{ marginLeft: 15 }}>
            <Text text="Опции бургера" style={{ marginBottom: 20 }} />
            <Column>
              {options?.map((option) => (
                <Row key={option?.id} center style={{ marginBottom: 10 }}>
                  <Text
                    text={option?.title}
                    style={{ minWidth: 45, textAlign: "left" }}
                  />
                  <Counter
                    count={option?.count}
                    incrementCounter={() => incrementCounter(option?.id)}
                    decrementCounter={() => decrementCounter(option?.id)}
                  />
                  <Checkbox
                    checked={option?.checked}
                    onChange={(event) => {
                      checkbox.onChange(event);
                      checkedStatus(option?.id);
                    }}
                  />
                  <Text
                    text={
                      option?.checked
                        ? `Ингредиент "${option?.title}" убран`
                        : `Убрать ингредиент`
                    }
                    style={{ whiteSpace: "nowrap" }}
                  />
                </Row>
              ))}
            </Column>
          </Block>
        )}
      </Block>
      {isBurgerPageWithId && (
        <Button
          text="Подтвердить"
          onClick={() => {
            history.push("/busket");
            addOrder({
              orderId: uuid(),
              counter: 1,
              item: item,
              options: options,
            });
          }}
        />
      )}
    </ItemWrapp>
  );
};

export default withData(Item);
