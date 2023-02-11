import { useState } from "react";
import EntriesContext from "./entries-context";

const EntriesProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItemHandler = (item) => {
    setItems((prevValue) => [...prevValue, item]);
  };

  const removeItemHandler = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  const editItemHandler = (id) => {};

  const entriesContext = {
    items: items,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    editItem: editItemHandler,
  };

  return (
    <EntriesContext.Provider value={entriesContext}>
      {children}
    </EntriesContext.Provider>
  );
};

export default EntriesProvider;
