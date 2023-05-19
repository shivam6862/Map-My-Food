import React, { useEffect, useState } from "react";
import classes from "./SearchItems.module.css";
import SearchItem from "../SearchItem/SearchItem";
import searchItemsData from "../../TemporaryData/Search/Small.json";

const SearchItems = ({ search }) => {
  const [data, setData] = useState(searchItemsData);
  const [searchItemData, setSearchItemData] = useState([]);
  useEffect(() => {
    if (search.length == 0) return;
    const newSearchItemData = data.filter((obj) =>
      Object.keys(obj).some((key) =>
        key.toLowerCase().includes(search.toLowerCase())
      )
    );
    setSearchItemData(newSearchItemData);
  }, [search]);
  return (
    <div className={classes.container}>
      <SearchItem searchItemData={searchItemData} />
    </div>
  );
};

export default SearchItems;
