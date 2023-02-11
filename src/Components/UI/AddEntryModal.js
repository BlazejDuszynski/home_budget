import classes from "./AddEntryModal.module.css";
import { Fragment } from "react";
import React, { useState, useContext } from "react";
import "react-datepicker/dist/react-datepicker.css";
import EntryTypeContext from "../../Store/entryType-context";
import EntriesContext from "../../Store/entries-context";

const AddEntryModal = (props) => {
  const { addItem } = useContext(EntriesContext);
  const { entryType } = useContext(EntryTypeContext);
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredCategory, setEnteredCategory] = useState("");
  const [enteredValue, setEnteredValue] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [isTitleValid, setIsTitleValid] = useState(true);
  const [isValueValid, setIsValueValid] = useState(true);
  const [isDateValid, setIsDateValid] = useState(true);

  const splicedEntryType = entryType.slice(0, entryType.length - 1);

  const changeTitleHandler = (event) => {
    setEnteredTitle(event.target.value);
    setIsTitleValid(true);
  };

  const changeCategoryHandler = (event) => {
    setEnteredCategory(event.target.value);
  };

  const changeValueHandler = (event) => {
    setEnteredValue(event.target.value);
    setIsValueValid(true);
  };

  const changeDateHandler = (event) => {
    setEnteredDate(event.target.value);
    setIsDateValid(true);
  };

  const addedItem = {
    title: enteredTitle,
    category: enteredCategory,
    value: enteredValue,
    date: new Date(enteredDate),
    id: Math.random().toString(),
    type: entryType,
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    if (enteredTitle.trim().length === 0) {
      setIsTitleValid(false);
    } else if (enteredValue <= 0) {
      setIsValueValid(false);
    } else if (enteredDate.length === 0) {
      setIsDateValid(false);
    } else {
      addItem(addedItem);
      props.onCloseModal();
    }
  };

  return (
    <Fragment>
      <div className={classes.backdrop} onClick={props.onCloseModal}></div>
      <div className={classes.modal}>
        <header className={classes.header}>
          <p>Add {splicedEntryType.toLowerCase()}</p>
          {/* <button className={classes.closeButton}>X</button> */}
        </header>
        <form className={classes.form} onSubmit={submitFormHandler}>
          <input
            type="text"
            placeholder="Title"
            name="title"
            className={`${!isTitleValid && classes.invalid} ${
              classes["input"]
            }`}
            onChange={changeTitleHandler}
            // value={setTitle}
          />
          {entryType === "Expenses" && (
            <select
              name="category"
              className={classes.select}
              onChange={changeCategoryHandler}
              // value={setCategory}
            >
              <option value="">Category</option>
              <option value="House">House</option>
              <option value="Bills">Bills</option>
              <option value="Food">Food</option>
              <option value="Car">Car</option>
              <option value="Clothes">Clothes</option>
              <option value="Fun">Fun</option>
            </select>
          )}

          <input
            type="number"
            min="0.01"
            step="0.01"
            placeholder="Value"
            className={`${!isValueValid && classes.invalid} ${
              classes["input"]
            }`}
            onChange={changeValueHandler}
            // value={setPrice}
          />
          <input
            type="date"
            className={`${!isDateValid && classes.invalid} ${
              classes["datePicker"]
            }`}
            onChange={changeDateHandler}
          />
          <button type="submit" className={classes.submitButton}>
            Add
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default AddEntryModal;
