import React from "react";
import { useHistory } from "react-router";

import styled from "styled-components";

import { withData } from "../../context/data";

import Button from "../../UI/Button";
import { Row } from "../../UI/Layout";
import Text from "../../UI/Text";
import Image from "../../UI/Image";
import Counter from "../../UI/Counter";

const BusketWrapp = styled.div``;

const BusketItem = styled.div``;

const Busket = (props) => {
  let { orders, setOrders } = props;

  let history = useHistory();

  console.log(orders[0]);

  const incrementCounter = (id) => {
    let arr = orders.map((item) => {
      if (item.id === id) {
        item.counter = item.counter + 1;
      }

      return item;
    });

    setOrders(arr);
  };

  const decrementCounter = (id) => {
    let arr = orders.map((item) => {
      if (item.id === id) {
        if (item.counter <= 1) {
          item.counter = 1;
        } else {
          item.counter = item.counter - 1;
        }
      }

      return item;
    });

    setOrders(arr);
  };

  return (
    <BusketWrapp>
      {orders.length === 0
        ? `Корзина пуста ...`
        : orders.map((order) => (
            <BusketItem key={order?.orderId}>
              <Row>
                <Image url={order?.item?.icon} alt={order?.item?.name} />
                <Text text={order?.item?.name} />
              </Row>
              <Counter
                count={order?.counter}
                incrementCounter={() => incrementCounter(order?.id)}
                decrementCounter={() => decrementCounter(order?.id)}
              />
              {order?.options?.map((option) => (
                <Row key={option?.id} center style={{ marginBottom: 10 }}>
                  <Text
                    text={
                      option?.count == 0
                        ? `${option?.title} - не класть`
                        : `${option?.title} - ${option?.count}`
                    }
                    style={{ minWidth: 45, textAlign: "left" }}
                  />
                </Row>
              ))}
            </BusketItem>
          ))}

      <Button
        text="Завершить"
        onClick={() => {
          history.push("/");
          setOrders([]);
        }}
      />
    </BusketWrapp>
  );
};

export default withData(Busket);
