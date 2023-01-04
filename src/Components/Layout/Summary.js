import classes from "./Summary.module.css";

const Summary = () => {
  return (
    <div className={classes.summary}>
      <p className={classes.summary__income}>1000</p>
      <p className={classes.summary__expense}>1000</p>
      <p className={classes.summary__total}>1000</p>
    </div>
  );
};

export default Summary;
