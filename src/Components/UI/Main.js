import { useState } from "react";
import EntryTypeProvider from "../../Store/EntryTypeProvider";
import EntriesContainer from "../Layout/EntriesContainer";
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
    <EntryTypeProvider>
      <main className={classes.main}>
        {isAddEntryModalOpen && (
          <AddEntryModal onCloseModal={closeAddEntryModalHandler} />
        )}
        <EntriesContainer
          name="Revenues"
          onOpenModal={openAddEntryModalHandler}
        />
        <EntriesContainer
          name="Expenses"
          onOpenModal={openAddEntryModalHandler}
        />
      </main>
    </EntryTypeProvider>
  );
};

export default Main;
