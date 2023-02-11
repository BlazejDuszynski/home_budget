import React from "react";

const EntriesContext = React.createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  editItem: (id) => {},
});

export default EntriesContext;
