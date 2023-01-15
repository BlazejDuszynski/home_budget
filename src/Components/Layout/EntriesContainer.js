import classes from "./EntriesContainer.module.css";
import { useContext } from "react";
import Entry from "./Entry";
import RevenuesContext from "../../Store/revenues-context";

const EntriesContainer = (props) => {
  const ctx = useContext(RevenuesContext);
  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <h2>{props.name}</h2>
        <button className={classes.button} onClick={props.onOpenModal}>
          Add
        </button>
      </header>
      {ctx.revenuesItems.map((revenue) => {
        return (
          <Entry
            title={revenue.title}
            category={revenue.category}
            price={revenue.price}
            id={revenue.id}
          />
        );
      })}
    </div>
  );
};

export default EntriesContainer;
