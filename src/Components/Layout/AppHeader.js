import Calendar from "./Calendar";
import classes from "./AppHeader.module.css";
import DateProvider from "../../Store/DateProvider";

const AppHeader = () => {
  return (
    <header className={classes.header}>
      <DateProvider>
        <Calendar />
      </DateProvider>
    </header>
  );
};

export default AppHeader;
