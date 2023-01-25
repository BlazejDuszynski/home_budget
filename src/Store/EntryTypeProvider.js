import { useState } from "react";
import EntryTypeContext from "./entryType-context";

const EntryTypeProvider = ({ children }) => {
  const [updatedEntryType, setUpdatedEntryType] = useState("");

  const changeEntryTypeHandler = (type) => {
    setUpdatedEntryType(type);
  };

  const entryTypeContext = {
    entryType: updatedEntryType,
    changeEntryType: changeEntryTypeHandler,
  };

  console.log(updatedEntryType);

  return (
    <EntryTypeContext.Provider value={entryTypeContext}>
      {children}
    </EntryTypeContext.Provider>
  );
};

export default EntryTypeProvider;
