import EntriesContainer from "../Layout/EntriesContainer";
import Summary from "../Layout/Summary";
import classes from "./Main.module.css";

const Main = () => {
  return (
    <main className={classes.main}>
      <EntriesContainer name="Revenues" />
      <Summary />
      <EntriesContainer name="Expenses" />
    </main>
  );
};

export default Main;
