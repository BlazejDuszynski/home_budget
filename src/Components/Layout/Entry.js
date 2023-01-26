import classes from "./Entry.module.css";
import { CiCircleRemove } from "react-icons/ci";
import { useContext } from "react";
import RevenuesContext from "../../Store/entries-context";

const Entry = (props) => {
  const ctx = useContext(RevenuesContext);

  const removeItemHandler = () => {
    ctx.removeItem(props.id);
  };

  const formattedValue = new Intl.NumberFormat("pl-PL", {
    style: "currency",
    currency: "PLN",
  }).format(props.value);

  return (
    <li className={classes.entry}>
      <div className={classes.description}>
        <div className={classes.title}>{props.title}</div>
        <div className={classes.category}>{props.category}</div>
      </div>
      <p
        className={`${
          props.type === "Revenues"
            ? classes.revenueColor
            : classes.expenseColor
        } ${classes["price"]}`}
      >
        {formattedValue}
      </p>
      <CiCircleRemove className={classes.trash} onClick={removeItemHandler} />
    </li>
  );
};

export default Entry;
