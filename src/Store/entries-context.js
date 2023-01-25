import React from "react";

const EntriesContext = React.createContext({
  revenuesItems: [],
  expenseItems: [],
  addRevenue: (item) => {},
  addExpense: (item) => {},
  removeItem: (id) => {},
});

export default EntriesContext;
