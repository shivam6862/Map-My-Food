import React from "react";
import classes from "./PageNotFound.module.css";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className={classes.container}>
      <img src="/swiggey/User/empty404.webp" alt="" />
      <h1>Page not found</h1>
      <p>
        Uh-oh! Looks like the page you are trying to access, doesn't exist.
        Please start afresh.
      </p>
      <Link to={"/"}>
        <button>GO HOME</button>
      </Link>
    </div>
  );
};

export default PageNotFound;
