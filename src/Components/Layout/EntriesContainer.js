import classes from "./EntriesContainer.module.css";
import Entry from "./Entry";

const EntriesContainer = (props) => {
  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <h2>{props.name}</h2>
        <button className={classes.button} onClick={props.onOpenModal}>
          Add
        </button>
      </header>
      <Entry />
    </div>
  );
};

export default EntriesContainer;
