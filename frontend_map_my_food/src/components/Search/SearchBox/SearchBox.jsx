import React from "react";
import classes from "./SearchBox.module.css";
import Svgsearch from "../../ui/Svg/Svgsearch";

const SearchBox = ({ setSearch }) => {
  return (
    <div className={classes.container}>
      <div className={classes.search}>
        <input
          type="text"
          name="Search"
          placeholder="Search for restaurants and food"
          id="search"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <div className={classes.image}>
          <Svgsearch />
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
