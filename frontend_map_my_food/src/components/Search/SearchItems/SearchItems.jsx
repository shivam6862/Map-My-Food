import React, { useEffect, useState } from "react";
import classes from "./SearchItems.module.css";
import SearchItem from "../SearchItem/SearchItem";
import searchItemsData from "../../TemporaryData/Search/Small.json";
const searchItemDataTemp = [
  {
    "": [
      {
        image: "/swiggey/Search/Small/6.png",
        name: "See all result for ",
      },
    ],
  },
];
const SearchItems = ({ search }) => {
  const [data, setData] = useState(searchItemsData);
  const [searchItemData, setSearchItemData] = useState([]);
  useEffect(() => {
    if (search.trim().length == 0) return;
    const newSearchItemData = data.filter((obj) =>
      Object.keys(obj).some((key) =>
        key.trim().toLowerCase().includes(search.trim().toLowerCase())
      )
    );
    setSearchItemData(newSearchItemData);
  }, [search]);
  return (
    <div className={classes.container}>
      <SearchItem searchItemData={searchItemData} />
      <SearchItem searchItemData={searchItemDataTemp} search={search} />
    </div>
  );
};

export default SearchItems;
