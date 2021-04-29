import React, { useState, useEffect } from "react";

export const DataContext = React.createContext();

const url = `https://my-json-server.typicode.com/NickMomotenko/codempire/db`;

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);

  const fetchedData = () => {
    fetch(url)
      .then((json) => json.json())
      .then((data) => {
        setData(data);
      });
  };

  useEffect(() => {
    fetchedData();
  }, []);

  return (
    <DataContext.Provider value={{ data, setData }}>
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
