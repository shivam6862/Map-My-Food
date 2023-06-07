import React from "react";
import SvgDelete from "../../ui/User/SvgDelete";
import SvgEdit from "../../ui/User/SvgEdit";
import SvgSave from "../../ui/User/SvgSave";
import classes from "./Crud.module.css";
import useCreateNewRestaurantData from "../../hook/useCreateNewRestaurant";

const Curd = ({ page, data, id }) => {
  const { CreateNewRestaurantData } = useCreateNewRestaurantData();
  const edited = async () => {
    const response = await CreateNewRestaurantData(data, page, "put", id);
  };
  const saved = async () => {
    const response = await CreateNewRestaurantData(data, page, "post", "");
  };
  const deleted = async () => {
    const response = await CreateNewRestaurantData(data, page, "delete", id);
  };
  return (
    <div className={classes.container}>
      <div className={classes.a} onClick={edited}>
        <SvgEdit />
      </div>
      <div className={classes.b} onClick={saved}>
        <SvgSave onClick={saved} />
      </div>
      <div className={classes.c} onClick={deleted}>
        <SvgDelete />
      </div>
    </div>
  );
};

export default Curd;
