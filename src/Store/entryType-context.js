import React from "react";

const EntryTypeContext = React.createContext({
  entryType: "",
  changeEntryType: (type) => {},
});

export default EntryTypeContext;
