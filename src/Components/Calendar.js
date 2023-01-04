import classes from "./Calendar.module.css";
import { useState } from "react";

const Calendar = () => {
  const [date, setDate] = useState(new Date());

  const choosePreviousMonthHandler = () => {
    const newDate = new Date(date.setMonth(date.getMonth() - 1));
    setDate(newDate);
  };

  const chooseNextMonthHandler = () => {
    const newDate = new Date(date.setMonth(date.getMonth() + 1));
    setDate(newDate);
  };

  const month = date.toLocaleString("default", { month: "long" });
  const monthCapitalLetter = month.charAt(0).toUpperCase() + month.slice(1);
  const year = date.getFullYear();

  return (
    <div className={classes.datePicker}>
      <button
        className={classes.datePicker__button}
        onClick={choosePreviousMonthHandler}
      >
        -
      </button>
      <div className={classes.datePicker__content}>
        <p>{monthCapitalLetter}</p>
        <p>{year}</p>
      </div>
      <button
        className={classes.datePicker__button}
        onClick={chooseNextMonthHandler}
      >
        +
      </button>
    </div>
  );
};

export default Calendar;
