import classes from "./AddEntryModal.module.css";
import { Fragment } from "react";

const AddEntryModal = (props) => {
  return (
    <Fragment>
      <div className={classes.backdrop} onClick={props.onCloseModal}></div>
    </Fragment>
  );
};

export default AddEntryModal;
