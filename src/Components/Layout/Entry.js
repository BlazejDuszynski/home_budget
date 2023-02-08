import classes from "./Entry.module.css";
import { FiEdit } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";
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

  // const editEntryHandler = () => {
  //   props.open();
  // };

  return (
    <li className={classes.entry}>
      <div className={classes.description}>
        <div className={classes.title}>{props.title}</div>
        <div className={classes.category}>{props.category}</div>
      </div>
      {/* <FiEdit className={classes.edit} onClick={editEntryHandler} /> */}
      <BsTrash className={classes.trash} onClick={removeItemHandler} />
      <p
        className={`${
          props.type === "Revenues"
            ? classes.revenueColor
            : classes.expenseColor
        } ${classes["price"]}`}
      >
        {formattedValue}
      </p>
    </li>
  );
};

export default Entry;
