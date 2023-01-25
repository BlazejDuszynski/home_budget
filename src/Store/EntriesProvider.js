import { useState } from "react";
import RevenuesContext from "./entries-context";

const EntriesProvider = ({ children }) => {
  const [revenueItems, setRevenuesItems] = useState([]);

  const addRevenueHandler = (revenue) => {
    setRevenuesItems((prevValue) => [...prevValue, revenue]);
  };

  const removeRevenueHandler = (id) => {
    const updatedRevenues = revenueItems.filter((revenue) => revenue.id !== id);
    setRevenuesItems(updatedRevenues);
  };

  const revenuesContext = {
    revenuesItems: revenueItems,
    addRevenue: addRevenueHandler,
    removeItem: removeRevenueHandler,
  };

  console.log(revenueItems);

  return (
    <RevenuesContext.Provider value={revenuesContext}>
      {children}
    </RevenuesContext.Provider>
  );
};

export default EntriesProvider;
