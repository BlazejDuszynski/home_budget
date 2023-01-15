import { useState } from "react";
import RevenuesContext from "./revenues-context";

const RevenuesProvider = (props) => {
  const [revenueItems, setRevenuesItems] = useState([]);

  const addRevenueHandler = (revenue) => {
    setRevenuesItems([...revenueItems, revenue]);
  };

  //   const removeRevenueHandler = (id) => {

  //   };

  const revenuesContext = {
    revenuesItems: revenueItems,
    addItem: addRevenueHandler,
    // removeItem: removeRevenueHandler,
  };

  console.log(revenuesContext);
  return (
    <RevenuesContext.Provider value={revenuesContext}>
      {props.children}
    </RevenuesContext.Provider>
  );
};

export default RevenuesProvider;
