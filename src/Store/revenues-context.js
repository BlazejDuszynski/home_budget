import React from "react";

const RevenuesContext = React.createContext({
  revenuesItems: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default RevenuesContext;
