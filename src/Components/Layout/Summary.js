import classes from "./Summary.module.css";

const Summary = () => {
  return (
    <div className={classes.container}>
      <p className={classes.revenues}>1000</p>
      <p className={classes.expenses}>1000</p>
      <p className={classes.total}>1000</p>
    </div>
  );
};

export default Summary;
