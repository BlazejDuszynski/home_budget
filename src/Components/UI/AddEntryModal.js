import classes from "./AddEntryModal.module.css";
import { Fragment } from "react";
import React, { useState, useContext } from "react";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import RevenuesContext from "../../Store/revenues-context";

const AddEntryModal = (props) => {
  const ctx = useContext(RevenuesContext);
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredCategory, setEnteredCategory] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const changeTitleHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const changeCategoryHandler = (event) => {
    setEnteredCategory(event.target.value);
  };

  const changePriceHandler = (event) => {
    setEnteredPrice(event.target.value);
  };

  const changeDateHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const addedItem = {
    title: enteredTitle,
    category: enteredCategory,
    price: enteredPrice,
    date: enteredDate,
    id: Math.random().toString(),
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    // if (title.trim().length === 0) {
    //   console.log("Enter valid title");
    // }
    // if (price <= 0) {
    //   console.log("Enter valid price");
    // }
    ctx.addItem(addedItem);
  };

  return (
    <Fragment>
      <div className={classes.backdrop} onClick={props.onCloseModal}></div>
      <div className={classes.modal}>
        <header className={classes.header}>
          <p>Add revenue</p>
          {/* <button className={classes.closeButton}>X</button> */}
        </header>
        <form className={classes.form} onSubmit={submitFormHandler}>
          <input
            type="text"
            placeholder="Title"
            name="title"
            className={classes.input}
            onChange={changeTitleHandler}
            // value={setTitle}
          />
          <select
            name="category"
            className={classes.select}
            onChange={changeCategoryHandler}
            // value={setCategory}
          >
            <option value="House">House</option>
            <option value="Bills">Bills</option>
            <option value="Food">Food</option>
            <option value="Car">Car</option>
            <option value="Clothes">Clothes</option>
            <option value="Fun">Fun</option>
          </select>
          <input
            type="number"
            min="0.01"
            step="0.01"
            placeholder="Price"
            className={classes.input}
            onChange={changePriceHandler}
            // value={setPrice}
          />
          <input
            type="date"
            className={classes.datePicker}
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
