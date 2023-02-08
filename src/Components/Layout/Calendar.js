import classes from "./Calendar.module.css";
import { useContext } from "react";
import DateContext from "../../Store/date-context";
import { MdOutlineArrowForwardIos, MdArrowBackIos } from "react-icons/md";

const Calendar = () => {
  const ctx = useContext(DateContext);

  const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    ctx.date
  );
  const monthCapitalLetter = month.charAt(0).toUpperCase() + month.slice(1);
  const year = ctx.date.getFullYear();
  const dateString = month + " " + year;

  const currentDate = new Date();
  const currentMonth = new Intl.DateTimeFormat("en-US", {
    month: "long",
  }).format(currentDate);
  const currentYear = currentDate.getFullYear();
  const currentDateString = currentMonth + " " + currentYear;

  return (
    <div className={classes.datePicker}>
      <MdArrowBackIos
        className={classes.datePicker__button}
        onClick={ctx.oneMonthDown}
      />
      <div className={classes.datePicker__content}>
        <p>{monthCapitalLetter}</p>
        <p>{year}</p>
        {dateString !== currentDateString && (
          <button
            className={classes.revertButton}
            onClick={ctx.getBackCurrentDate}
          >
            <div>
              Go back to {currentMonth} {currentYear}
            </div>
          </button>
        )}
      </div>
      <MdOutlineArrowForwardIos
        className={classes.datePicker__button}
        onClick={ctx.oneMonthUp}
      />
    </div>
  );
};

export default Calendar;
