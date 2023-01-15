import { useState } from "react";
import RevenuesContext from "./revenues-context";

const RevenuesProvider = (props) => {
  const [revenueItems, setRevenuesItems] = useState([]);

  const addRevenueHandler = (revenue) => {
    setRevenuesItems([...revenueItems, revenue]);
  };

  const removeRevenueHandler = (id) => {
    const updatedRevenues = revenueItems.filter((revenue) => revenue.id !== id);
    setRevenuesItems(updatedRevenues);
  };

  console.log(revenueItems);

  const revenuesContext = {
    revenuesItems: revenueItems,
    addItem: addRevenueHandler,
    removeItem: removeRevenueHandler,
  };

  return (
    <RevenuesContext.Provider value={revenuesContext}>
      {props.children}
    </RevenuesContext.Provider>
  );
};

export default RevenuesProvider;
