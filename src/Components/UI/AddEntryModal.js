import classes from "./AddEntryModal.module.css";
import { Fragment } from "react";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddEntryModal = (props) => {
  const [startDate, setStartDate] = useState(new Date());

  const changeDateHandler = (date) => {
    setStartDate(date);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Fragment>
      <div className={classes.backdrop} onClick={props.onCloseModal}></div>
      <div className={classes.modal}>
        <header className={classes.header}>
          <p>Add revenue</p>
          {/* <button className={classes.closeButton}>X</button> */}
        </header>
        <form className={classes.form}>
          <input
            type="text"
            placeholder="Title"
            name="title"
            className={classes.input}
          />
          <select name="category" className={classes.select}>
            <option value="">Category</option>
            <option value="House">House</option>
            <option value="Bills">Bills</option>
            <option value="Food">Food</option>
            <option value="Car">Car</option>
            <option value="Clothes">Clothes</option>
            <option value="Fun">Fun</option>
          </select>
          <input type="number" placeholder="Price" className={classes.input} />
          <DatePicker
            className={classes.datePicker}
            selected={startDate}
            onChange={changeDateHandler}
          />
          <button type="submit" onClick={submitFormHandler} className={classes.submitButton}>
            Add
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default AddEntryModal;
