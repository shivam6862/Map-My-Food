import React, { useEffect, useState } from "react";
import classes from "./SearchItems.module.css";
import SearchItem from "../SearchItem/SearchItem";
import searchItemsData from "../../TemporaryData/Search/Small.json";

const SearchItems = ({ search }) => {
  const [data, setData] = useState(searchItemsData);
  const [searchItemData, setSearchItemData] = useState({});
  useEffect(() => {
    console.log(search);
    const newSearchItemData = {};
    setSearchItemData(newSearchItemData);
  }, [search]);
  return (
    <div className={classes.container}>
      <SearchItem searchItemData={searchItemData} />
    </div>
  );
};

export default SearchItems;
