import Calendar from "./Calendar";
import classes from "./AppHeader.module.css";

const AppHeader = () => {
  return (
    <header className={classes.header}>
      <Calendar />
    </header>
  );
};

export default AppHeader;
