import classes from "./Entry.module.css";
import { CiCircleRemove } from "react-icons/ci";

const Entry = (props) => {
  return (
    <li className={classes.entry}>
      <div className={classes.description}>
        <div className={classes.title}>{props.title}</div>
        <div className={classes.category}>{props.category}</div>
      </div>
      <p className={classes.price}>{props.price} PLN</p>
      <p>
        <CiCircleRemove className={classes.trash} />
      </p>
    </li>
  );
};

export default Entry;
