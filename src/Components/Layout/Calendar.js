import classes from "./Calendar.module.css";
import { useContext } from "react";
import DateContext from "../../Store/date-context";
import { MdOutlineArrowForwardIos, MdArrowBackIos } from "react-icons/md";

const Calendar = () => {
  const ctx = useContext(DateContext);

  const month = ctx.date.toLocaleString("default", { month: "long" });
  const monthCapitalLetter = month.charAt(0).toUpperCase() + month.slice(1);
  const year = ctx.date.getFullYear();

  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString("default", { month: "long" });
  const currentYear = currentDate.getFullYear();

  return (
    <div className={classes.datePicker}>
      <MdArrowBackIos
        className={classes.datePicker__button}
        onClick={ctx.oneMonthDown}
      />
      <div className={classes.datePicker__content}>
        <p>{monthCapitalLetter}</p>
        <p>{year}</p>
        <button className={classes.revertButton}>
          Go back to {currentMonth} {currentYear}
        </button>
      </div>
      <MdOutlineArrowForwardIos
        className={classes.datePicker__button}
        onClick={ctx.oneMonthUp}
      />
    </div>
  );
};

export default Calendar;
