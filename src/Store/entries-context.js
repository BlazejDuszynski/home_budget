import React from "react";

const EntriesContext = React.createContext({
  revenuesItems: [],
  addRevenue: (item) => {},
  removeItem: (id) => {},
});

export default EntriesContext;
