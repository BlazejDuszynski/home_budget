import classes from "./EntriesContainer.module.css";
import { useContext } from "react";
import Entry from "./Entry";
import RevenuesContext from "../../Store/revenues-context";
import DateContext from "../../Store/date-context";

const EntriesContainer = (props) => {
  const revenuesCtx = useContext(RevenuesContext);
  const dateCtx = useContext(DateContext);

  const chosenMonth = dateCtx.date.getMonth();
  const chosenYear = dateCtx.date.getFullYear();
  console.log(chosenMonth);
  console.log(chosenYear);

  const filteredRevenues = revenuesCtx.revenuesItems.filter((revenueItem) => {
    const revenueMonth = new Date(revenueItem.date).getMonth();
    const revenueYear = new Date(revenueItem.date).getFullYear();
    return chosenMonth === revenueMonth && chosenYear === revenueYear;
  });

  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <h2>{props.name}</h2>
        <button className={classes.button} onClick={props.onOpenModal}>
          Add
        </button>
      </header>
      {filteredRevenues.length === 0 ? (
        <p className={classes.info}>
          There are no {props.name.toLowerCase()} in this month.
        </p>
      ) : (
        filteredRevenues.map((revenue) => {
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
