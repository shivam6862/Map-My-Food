import React, { useEffect, useState } from "react";
import classes from "./SearchItems.module.css";
import SearchItem from "../SearchItem/SearchItem";
import useSmallSearch from "../../hook/useSmallSearch";

const searchItemDataTemp = [
  {
    _id: "6474ed7eb89b4fb6785ca2e0",
    "": [
      {
        image: "/swiggey/Search/Small/6.png",
        name: "See all result for ",
      },
    ],
  },
];
const SearchItems = ({ search }) => {
  const { smallSearch } = useSmallSearch();
  const [searchItemData, setSearchItemData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (search.trim().length == 0) return;
      const result = await smallSearch(search);
      setSearchItemData(result);
    };
    fetchData();
  }, [search]);
  return (
    <div className={classes.container}>
      <SearchItem searchItemData={searchItemData} />
      <SearchItem searchItemData={searchItemDataTemp} search={search} />
    </div>
  );
};

export default SearchItems;
