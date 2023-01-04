import classes from "./EntriesContainer.module.css";

const EntriesContainer = (props) => {

  return (
    <div className={classes.container}>
      <header>
        <button className={classes.button}>Dodaj</button>
        <h2>{props.name}</h2>
      </header>
    </div>
  );
};

export default EntriesContainer;
