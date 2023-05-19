import React from "react";
import classes from "./SearchAfterClickItems.module.css";
import SearchAfterClickHeader from "../SearchAfterClickHeader/SearchAfterClickHeader";
import SearchAfterClickItem from "../SearchAfterClickItem/SearchAfterClickItem";
import searchAfterClickItemsData from "../../../TemporaryData/Search/Big.json";
import { useState, useEffect } from "react";

const SearchAfterClickItems = ({ search }) => {
  const [data, setData] = useState(searchAfterClickItemsData);
  const [searchItemAfterClickData, setSearchItemAfterClickData] = useState({});
  useEffect(() => {
    console.log(search);
    const newSearchItemData = {};
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
