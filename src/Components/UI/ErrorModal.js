import { Fragment } from "react";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <Fragment>

      <div className={classes.errorModal}>
        <header>This is error</header>
        <p></p>
        <div>
          <button></button>
          <button></button>
        </div>
      </div>
    </Fragment>
  );
};

export default ErrorModal;
