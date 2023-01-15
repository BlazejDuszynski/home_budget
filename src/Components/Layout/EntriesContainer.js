import classes from "./EntriesContainer.module.css";
import { useContext } from "react";
import Entry from "./Entry";
import RevenuesContext from "../../Store/revenues-context";
import DateContext from "../../Store/date-context";

const EntriesContainer = (props) => {
  const revenuesCtx = useContext(RevenuesContext);
  const dateCtx = useContext(DateContext);

  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <h2>{props.name}</h2>
        <button className={classes.button} onClick={props.onOpenModal}>
          Add
        </button>
      </header>
      {revenuesCtx.revenuesItems.length === 0 ? (
        <p className={classes.info}>
          There are no {props.name.toLowerCase()} in this month.
        </p>
      ) : (
        revenuesCtx.revenuesItems.map((revenue) => {
          return (
            <Entry
              title={revenue.title}
              category={revenue.category}
              price={revenue.price}
              id={revenue.id}
              key={revenue.id}
            />
          );
        })
      )}
    </div>
  );
};

export default EntriesContainer;
