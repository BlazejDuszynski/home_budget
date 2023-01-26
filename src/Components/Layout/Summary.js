import classes from "./Summary.module.css";

const Summary = (props) => {
  return (
    <div className={classes.summary}>
      <h3>TOTAL</h3>
      <p
        className={`${
          props.type === "Expenses"
            ? classes.expenseColor
            : classes.revenueColor
        } ${classes["amount"]}`}
      >
        {props.total}
      </p>
    </div>
  );
};

export default Summary;
