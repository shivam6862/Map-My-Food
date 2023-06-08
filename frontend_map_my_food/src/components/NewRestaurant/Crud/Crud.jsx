import React from "react";
import SvgDelete from "../../ui/User/SvgDelete";
import SvgEdit from "../../ui/User/SvgEdit";
import SvgSave from "../../ui/User/SvgSave";
import classes from "./Crud.module.css";
import useCreateNewRestaurantData from "../../hook/useCreateNewRestaurant";
import { useLocationLocalStorage } from "../../hook/LocationLocalStorage";

const Curd = ({ page, data, id, imageToBackend }) => {
  const { CreateNewRestaurantData } = useCreateNewRestaurantData();
  const { updateRestaurantId } = useLocationLocalStorage();
  const edited = async () => {
    const response = await CreateNewRestaurantData(
      data,
      page,
      "put",
      id,
      imageToBackend
    );
  };
  const saved = async () => {
    const response = await CreateNewRestaurantData(
      data,
      page,
      "post",
      "",
      imageToBackend
    );
    updateRestaurantId(response.ResturentId);
  };
  const deleted = async () => {
    const response = await CreateNewRestaurantData(
      data,
      page,
      "delete",
      id,
      imageToBackend
    );
  };
  return (
    <div className={classes.container}>
      {id && (
        <div className={classes.a} onClick={edited}>
          <SvgEdit />
        </div>
      )}
      {!id && (
        <div className={classes.b} onClick={saved}>
          <SvgSave onClick={saved} />
        </div>
      )}
      {id && (
        <div className={classes.c} onClick={deleted}>
          <SvgDelete />
        </div>
      )}
    </div>
  );
};

export default Curd;
