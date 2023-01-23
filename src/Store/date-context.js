import React from "react";

const DateContext = React.createContext({
  date: "",
  oneMonthUp: () => {},
  oneMonthDown: () => {},
});

export default DateContext;
