import React from "react";
import classes from "./SearchItem.module.css";

const SearchItem = ({ searchItemData }) => {
  console.log(searchItemData);
  return (
    <div className={classes.container}>
      <div>SearchItem</div>
    </div>
  );
};

export default SearchItem;
