import Calendar from "./Calendar";
import classes from "./AppHeader.module.css";
import DateProvider from "../../Store/DateProvider";

const AppHeader = () => {
  return (
    <header className={classes.header}>
      <Calendar />
    </header>
  );
};

export default AppHeader;
