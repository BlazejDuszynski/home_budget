import classes from "./Calendar.module.css";
import { useContext } from "react";
import DateContext from "../../Store/date-context";

const Calendar = () => {
  const ctx = useContext(DateContext);

  const month = ctx.date.toLocaleString("default", { month: "long" });
  const monthCapitalLetter = month.charAt(0).toUpperCase() + month.slice(1);
  const year = ctx.date.getFullYear();

  console.log(ctx.date);

  return (
    <div className={classes.datePicker}>
      <button className={classes.datePicker__button} onClick={ctx.oneMonthDown}>
        -
      </button>
      <div className={classes.datePicker__content}>
        <p>{monthCapitalLetter}</p>
        <p>{year}</p>
      </div>
      <button className={classes.datePicker__button} onClick={ctx.oneMonthUp}>
        +
      </button>
    </div>
  );
};

export default Calendar;
