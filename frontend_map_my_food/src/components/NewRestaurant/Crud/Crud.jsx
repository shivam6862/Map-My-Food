import React from "react";
import SvgDelete from "../../ui/User/SvgDelete";
import SvgEdit from "../../ui/User/SvgEdit";
import SvgSave from "../../ui/User/SvgSave";
import classes from "./Crud.module.css";

const Curd = () => {
  return (
    <div className={classes.container}>
      <div className={classes.a}>
        <SvgEdit />
      </div>
      <div className={classes.b}>
        <SvgSave />
      </div>
      <div className={classes.c}>
        <SvgDelete />
      </div>
    </div>
  );
};

export default Curd;
