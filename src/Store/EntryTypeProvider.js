import { useState } from "react";
import EntryTypeContext from "./entryType-context";

const EntryTypeProvider = ({ children }) => {
  const [updatedEntryType, setUpdatedEntryType] = useState("");

  const updateEntryTypeHandler = (type) => {
    setUpdatedEntryType(type);
  };

  const entryTypeContext = {
    entryType: updatedEntryType,
    updatedEntryType: updateEntryTypeHandler,
  };

  return (
    <EntryTypeContext.Provider value={entryTypeContext}>
      {children}
    </EntryTypeContext.Provider>
  );
};

export default EntryTypeProvider;
