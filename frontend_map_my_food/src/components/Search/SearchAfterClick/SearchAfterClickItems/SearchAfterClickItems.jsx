import React, { useState, useEffect } from "react";
import classes from "./SearchAfterClickItems.module.css";
import SearchAfterClickHeader from "../SearchAfterClickHeader/SearchAfterClickHeader";
import SearchAfterClickItem from "../SearchAfterClickItem/SearchAfterClickItem";

const SearchAfterClickItems = ({ search, data }) => {
  const [searchItemAfterClickData, setSearchItemAfterClickData] = useState([]);
  useEffect(() => {
    if (search.trim().length == 0) return;
    const newSearchItemData = data.filter((obj) =>
      Object.keys(obj).some((key) =>
        key.trim().toLowerCase().includes(search.trim().toLowerCase())
      )
    );
    setSearchItemAfterClickData(newSearchItemData);
  }, [search]);
  return (
    <div className={classes.container}>
      <SearchAfterClickHeader />
      <SearchAfterClickItem
        searchItemAfterClickData={searchItemAfterClickData}
      />
    </div>
  );
};

export default SearchAfterClickItems;
