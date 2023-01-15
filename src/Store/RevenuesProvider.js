import { useState } from "react";
import RevenuesContext from "./revenues-context";

const RevenuesProvider = (props) => {
  const [revenuesItems, setRevenuesItems] = useState([]);

  const addRevenueHandler = (revenue) => {
    setRevenuesItems([...revenuesItems, revenue]);
  };

  const revenuesContext = {
    revenuesItems: revenuesItems,
    addItem: addRevenueHandler,
  };

  console.log(revenuesContext);
  return (
    <RevenuesContext.Provider value={revenuesContext}>
      {props.children}
    </RevenuesContext.Provider>
  );
};

export default RevenuesProvider;
