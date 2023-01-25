import React from "react";

const EntryTypeContext = React.createContext({
  entryType: "",
  changeEntryType: () => {},
});

export default EntryTypeContext;
