import DateContext from "./date-context";
import { useState } from "react";

const DateProvider = (props) => {
  const [date, setDate] = useState(new Date());

  const choosePreviousMonthHandler = () => {
    const newDate = new Date(date.setMonth(date.getMonth() - 1));
    setDate(newDate);
  };

  const chooseNextMonthHandler = () => {
    const newDate = new Date(date.setMonth(date.getMonth() + 1));
    setDate(newDate);
  };

  const dateContext = {
    date: date,
    oneMonthUp: chooseNextMonthHandler,
    oneMonthDown: choosePreviousMonthHandler,
  };

  return (
    <DateContext.Provider value={dateContext}>
      {props.children}
    </DateContext.Provider>
  );
};

export default DateProvider;
