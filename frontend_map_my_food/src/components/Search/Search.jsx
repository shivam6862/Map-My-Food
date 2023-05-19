import React, { useState } from "react";
import classes from "./Search.module.css";
import SearchBox from "./SearchBox/SearchBox";
import SearchItems from "./SearchItems/SearchItems";
import SearchAfterClickItems from "./SearchAfterClick/SearchAfterClickItems/SearchAfterClickItems";

const Search = () => {
  const [search, setSearch] = useState("");
  const setSearchValue = (data) => {
    console.log(data);
    setSearch(data);
  };
  return (
    <div className={classes.container}>
      <SearchBox setSearch={setSearchValue} />
      <SearchItems search={search} />
      <SearchAfterClickItems search={search} />
    </div>
  );
};

export default Search;
