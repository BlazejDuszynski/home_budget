import { useState } from "react";
import DateProvider from "../../Store/DateProvider";
import EntriesContainer from "../Layout/EntriesContainer";
import Summary from "../Layout/Summary";
import AddEntryModal from "./AddEntryModal";
import classes from "./Main.module.css";

const Main = () => {
  const [isAddEntryModalOpen, setIsAddEntryModalOpen] = useState(false);

  const openAddEntryModalHandler = () => {
    setIsAddEntryModalOpen(true);
  };

  const closeAddEntryModalHandler = () => {
    setIsAddEntryModalOpen(false);
  };

  return (
    <DateProvider>
      <main className={classes.main}>
        {isAddEntryModalOpen && (
          <AddEntryModal onCloseModal={closeAddEntryModalHandler} />
        )}
        <EntriesContainer
          name="Revenues"
          onOpenModal={openAddEntryModalHandler}
        />
        {/* <Summary /> */}
        <EntriesContainer name="Expenses" />
      </main>
    </DateProvider>
  );
};

export default Main;
