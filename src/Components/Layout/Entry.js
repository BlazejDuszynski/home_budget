import classes from "./Entry.module.css";

const Entry = () => {
  return (
    <li className={classes.entry}>
      <div className={classes.description}>
        <div className={classes.title}>Title</div>
        <div className={classes.category}>Category</div>
      </div>
      <p>12,99</p>
      <p>Delete</p>
    </li>
  );
};

export default Entry;
