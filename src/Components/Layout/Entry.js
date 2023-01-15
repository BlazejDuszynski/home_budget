import classes from "./Entry.module.css";
import { CiCircleRemove } from "react-icons/ci";
import { useContext } from "react";
import RevenuesContext from "../../Store/revenues-context";

const Entry = (props) => {
  const ctx = useContext(RevenuesContext);

  const entryId = props.id;

  const removeItemHandler = () => {
    ctx.removeItem(entryId);
  };

  return (
    <li className={classes.entry}>
      <div className={classes.description}>
        <div className={classes.title}>{props.title}</div>
        <div className={classes.category}>{props.category}</div>
      </div>
      <p className={classes.price}>{props.price} PLN</p>
      {/* <p>{props.id}</p> */}
      <CiCircleRemove className={classes.trash} onClick={removeItemHandler} />
    </li>
  );
};

export default Entry;
