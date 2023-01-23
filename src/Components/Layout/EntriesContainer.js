import classes from "./EntriesContainer.module.css";
import { useContext, useEffect, useState } from "react";
import Entry from "./Entry";
import RevenuesContext from "../../Store/revenues-context";
import DateContext from "../../Store/date-context";

const EntriesContainer = (props) => {
  const revenuesCtx = useContext(RevenuesContext);
  const { date } = useContext(DateContext);
  const [filteredRevenues, setFilteredRevenues] = useState([
    revenuesCtx.revenuesItems,
  ]);

  console.log(date);

  const chosenMonth = date.getMonth();
  const chosenYear = date.getFullYear();

  useEffect(() => {
    setFilteredRevenues(
      revenuesCtx.revenuesItems.filter(({ date: revenueDate }) => {
        const revenueMonth = revenueDate.getMonth();
        const revenueYear = revenueDate.getFullYear();
        return chosenMonth === revenueMonth && chosenYear === revenueYear;
      })
    );
    console.log(date, "sadasd");
  }, [filteredRevenues]);

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
