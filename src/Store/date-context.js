import React from "react";

const DateContext = React.createContext({
  date: "",
  oneMonthUp: () => {},
  oneMonthDown: () => {},
  getBackCurrentDate: () => {},
});

export default DateContext;
