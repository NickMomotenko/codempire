import React, { useState, useEffect } from "react";

export const DataContext = React.createContext();

const url = `https://my-json-server.typicode.com/NickMomotenko/codempire/db`;

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [activeBurger, setActiveBurger] = useState(null);
  const [orders, setOrders] = useState([]);

  const fetchedData = () => {
    fetch(url)
      .then((json) => json.json())
      .then((res) => {
        setData(
          localStorage.getItem("data") === null
            ? localStorage.setItem("data", JSON.stringify(res))
            : JSON.parse(localStorage.getItem("data"))
        );
      });
  };

  useEffect(() => {
    fetchedData();
  }, [data !== null]);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("activeBurger"))) {
      setActiveBurger(JSON.parse(localStorage.getItem("activeBurger")));
    }
  }, [activeBurger !== null]);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("orders"))) {
      setOrders(JSON.parse(localStorage.getItem("orders")));
    }
  }, [orders.length]);

  const changeActiveBurger = (item) => {
    if (JSON.parse(localStorage.getItem("activeBurger"))) {
      if (JSON.parse(localStorage.getItem("activeBurger")) !== item) {
        localStorage.setItem("activeBurger", JSON.stringify(item));
        setActiveBurger(JSON.parse(localStorage.getItem("activeBurger")));
      }
    } else {
      localStorage.setItem("activeBurger", JSON.stringify(item));
      setActiveBurger(JSON.parse(localStorage.getItem("activeBurger")));
    }
  };

  const addOrder = (order) => {
    if (JSON.parse(localStorage.getItem("orders"))) {
      if (JSON.parse(localStorage.getItem("orders"))[0] !== order) {
        let arr = [...orders, order];

        localStorage.setItem("orders", JSON.stringify(arr));
        setOrders(JSON.parse(localStorage.getItem("orders")));
      }
    } else {
      let arr = [...orders, order];

      localStorage.setItem("orders", JSON.stringify(arr));
      setOrders(JSON.parse(localStorage.getItem("orders")));
    }
  };

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        activeBurger,
        changeActiveBurger,
        orders,
        addOrder,
        setOrders,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const withData = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return (
        <DataContext.Consumer>
          {(value) => {
            return <WrappedComponent {...value} {...this.props} />;
          }}
        </DataContext.Consumer>
      );
    }
  };
};
