import classes from "./EntriesContainer.module.css";

const EntriesContainer = (props) => {
  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <button className={classes.button} onClick={props.onOpenModal}>
          Add
        </button>
        <h2>{props.name}</h2>
      </header>
    </div>
  );
};

export default EntriesContainer;
