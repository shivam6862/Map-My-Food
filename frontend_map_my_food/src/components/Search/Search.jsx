import React, { useState } from "react";
import classes from "./Search.module.css";
import SearchBox from "./SearchBox/SearchBox";
import SearchItems from "./SearchItems/SearchItems";
import SearchAfterClickItems from "./SearchAfterClick/SearchAfterClickItems/SearchAfterClickItems";
import HomeFooter from "../home/HomeFooter/HomeFooter";

const Search = () => {
  const [search, setSearch] = useState("");
  const setSearchValue = (data) => {
    setSearch(data);
  };
  return (
    <div className={classes.container}>
      <div className={classes.box}>
        <SearchBox setSearch={setSearchValue} />
        <SearchItems search={search} />
        <SearchAfterClickItems search={search} />
      </div>
      <HomeFooter />
    </div>
  );
};

export default Search;
