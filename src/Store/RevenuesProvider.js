import { useState } from "react";
import RevenuesContext from "./revenues-context";

const RevenuesProvider = (props) => {
  const [revenueItems, setRevenuesItems] = useState([]);

  const addRevenueHandler = (revenue) => {
    setRevenuesItems( (prevValue) => [...prevValue, revenue]);
  };

  const removeRevenueHandler = (id) => {
    const updatedRevenues = revenueItems.filter((revenue) => revenue.id !== id);
    setRevenuesItems(updatedRevenues);
  };

  const revenuesContext = {
    revenuesItems: revenueItems,
    addItem: addRevenueHandler,
    removeItem: removeRevenueHandler,
  };

  console.log(revenueItems);

  return (
    <RevenuesContext.Provider value={revenuesContext}>
      {props.children}
    </RevenuesContext.Provider>
  );
};

export default RevenuesProvider;
