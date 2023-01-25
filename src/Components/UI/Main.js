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
    <main className={classes.main}>
      <EntryTypeProvider>
        {isAddEntryModalOpen && (
          <AddEntryModal onCloseModal={closeAddEntryModalHandler} />
        )}
      </EntryTypeProvider>
      {/* <DateProvider> */}
      <EntriesContainer
        name="Revenues"
        onOpenModal={openAddEntryModalHandler}
      />
      {/* <Summary /> */}
      <EntriesContainer
        name="Expenses"
        onOpenModal={openAddEntryModalHandler}
      />
      {/* </DateProvider> */}
    </main>
  );
};

export default Main;
