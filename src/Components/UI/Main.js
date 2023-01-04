import EntriesContainer from "../Layout/EntriesContainer";
import classes from "./Main.module.css";

const Main = () => {
  return (
    <main className={classes.main}>
      <EntriesContainer name="Income" />
      <EntriesContainer name="Expenses" />
    </main>
  );
};

export default Main;
