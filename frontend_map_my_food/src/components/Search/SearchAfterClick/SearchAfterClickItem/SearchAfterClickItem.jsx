import React from "react";
import classes from "./SearchAfterClickItem.module.css";

const SearchAfterClickItem = ({ searchItemAfterClickData }) => {
  console.log(searchItemAfterClickData);
  return (
    <div className={classes.container}>
      <div>SearchAfterClickItem</div>
    </div>
  );
};

export default SearchAfterClickItem;
