import { useState } from "react";
import RevenuesContext from "./entries-context";

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

  const revenuesContext = {
    revenuesItems: revenueItems,
    expenseItems: expenseItems,
    addRevenue: addRevenueHandler,
    addExpense: addExpenseHandler,
    removeItem: removeEntryHandler,
  };

  console.log(revenueItems);
  console.log(expenseItems);

  return (
    <RevenuesContext.Provider value={revenuesContext}>
      {children}
    </RevenuesContext.Provider>
  );
};

export default EntriesProvider;
