import React from "react";
import classes from "./Navigation.module.css";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  const isActive = (pathname) => {
    return location.pathname === pathname;
  };
  return (
    <div className={classes.container}>
      <div className={classes.items}>
        <Link
          to={"/support/issues/partner-onboarding"}
          className={`${
            isActive("/support/issues/partner-onboarding") ||
            isActive("/supports")
              ? classes.active
              : classes.item
          }`}
        >
          Partner Onboarding
        </Link>
        <Link
          to={"/support/issues/legal"}
          className={`${
            isActive("/support/issues/legal") ? classes.active : classes.item
          }`}
        >
          Legal
        </Link>
        <Link
          to={"/support/issues/faq"}
          className={`${
            isActive("/support/issues/faq") ? classes.active : classes.item
          }`}
        >
          FAQs
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
