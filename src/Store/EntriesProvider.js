import { useState } from "react";
import EntriesContext from "./entries-context";

const EntriesProvider = ({ children }) => {
  const [revenueItems, setRevenuesItems] = useState([]);
  const [expenseItems, setExpenseItems] = useState([]);

  const addRevenueHandler = (revenue) => {
    setRevenuesItems((prevValue) => [...prevValue, revenue]);
  };

  const addExpenseHandler = (expense) => {
    setExpenseItems((prevValue) => [...prevValue, expense]);
  };

  const removeEntryHandler = (id) => {
    const updatedRevenues = revenueItems.filter((revenue) => revenue.id !== id);
    setRevenuesItems(updatedRevenues);
  };

  const entriesContext = {
    revenuesItems: revenueItems,
    expenseItems: expenseItems,
    addRevenue: addRevenueHandler,
    addExpense: addExpenseHandler,
    removeItem: removeEntryHandler,
  };

  console.log(revenueItems);
  console.log(expenseItems);

  return (
    <EntriesContext.Provider value={entriesContext}>
      {children}
    </EntriesContext.Provider>
  );
};

export default EntriesProvider;
