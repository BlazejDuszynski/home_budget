import DateContext from "./date-context";
import { useCallback, useState } from "react";

const DateProvider = ({ children }) => {
  const [date, setDate] = useState(new Date());

  const choosePreviousMonthHandler = useCallback(() => {
    const newDate = new Date(date.setMonth(date.getMonth() - 1));
    setDate(newDate);
  }, [date]);

  const chooseNextMonthHandler = useCallback(() => {
    const newDate = new Date(date.setMonth(date.getMonth() + 1));
    setDate(newDate);
  }, [date]);

  console.log(date);

  return (
    <DateContext.Provider
      value={{
        date: date,
        oneMonthUp: chooseNextMonthHandler,
        oneMonthDown: choosePreviousMonthHandler,
      }}
    >
      {children}
    </DateContext.Provider>
  );
};

export default DateProvider;
