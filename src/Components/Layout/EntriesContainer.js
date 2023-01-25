import classes from "./EntriesContainer.module.css";
import { useContext, useEffect, useState } from "react";
import Entry from "./Entry";
import EntriesContext from "../../Store/entries-context";
import EntryTypeContext from "../../Store/entryType-context";
import DateContext from "../../Store/date-context";

const EntriesContainer = (props) => {
  const { revenuesItems, expenseItems } = useContext(EntriesContext);
  const entryTypeCtx = useContext(EntryTypeContext);
  const { date } = useContext(DateContext);
  const [filteredEntries, setFilteredEntries] = useState([revenuesItems]);

  console.log(date);

  const chosenMonth = date.getMonth();
  const chosenYear = date.getFullYear();

  useEffect(() => {
    let entriesItems;
    if (props.name === "Revenues") {
      entriesItems = revenuesItems;
    } else if (props.name === "Expenses") {
      entriesItems = expenseItems;
    }
    setFilteredEntries(
      entriesItems.filter(({ date: entryDate }) => {
        const revenueMonth = entryDate.getMonth();
        const revenueYear = entryDate.getFullYear();
        return chosenMonth === revenueMonth && chosenYear === revenueYear;
      })
    );
  }, [revenuesItems || expenseItems]);

  const openSpecifiedEntryModalHandler = () => {
    entryTypeCtx.changeEntryType(props.name);
    props.onOpenModal();
  };

  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <h2>{props.name}</h2>
        <button
          className={classes.button}
          onClick={openSpecifiedEntryModalHandler}
        >
          Add
        </button>
      </header>
      {filteredEntries.length === 0 ? (
        <p className={classes.info}>
          There are no {props.name.toLowerCase()} in this month.
        </p>
      ) : (
        filteredEntries.map((entry) => {
          return (
            <Entry
              title={entry.title}
              category={entry.category}
              price={entry.price}
              id={entry.id}
              key={entry.id}
            />
          );
        })
      )}
    </div>
  );
};

export default EntriesContainer;
