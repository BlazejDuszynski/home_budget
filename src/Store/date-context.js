import React from "react";

const DateContext = React.createContext({
  date: new Date(),
  oneMonthUp: () => {},
  oneMonthDown: () => {},
});

export default DateContext;
