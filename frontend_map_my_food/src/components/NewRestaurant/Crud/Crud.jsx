import React from "react";
import SvgDelete from "../../ui/User/SvgDelete";
import SvgEdit from "../../ui/User/SvgEdit";
import SvgSave from "../../ui/User/SvgSave";
import classes from "./Crud.module.css";
import useCreateNewRestaurantData from "../../hook/useCreateNewRestaurant";
import { useLocationLocalStorage } from "../../hook/LocationLocalStorage";
import { useNotification } from "../../hook/useNotification";

const Curd = ({ page, data, id, imageToBackend }) => {
  const { CreateNewRestaurantData } = useCreateNewRestaurantData();
  const { updateRestaurantId, updatePersonalDetails } =
    useLocationLocalStorage();
  const { NotificationHandler } = useNotification();

  const chechData = async () => {
    var missingFields = "";
    for (let field of Object.keys(data)) {
      if (!data[field]) {
        missingFields += field.charAt(0).toUpperCase() + field.slice(1) + ", ";
      }
    }
    if (missingFields.length != "") {
      NotificationHandler(`Fill the field ${missingFields}`, "Info");
      return false;
    }
    return true;
  };

  const edited = async () => {
    const checking = await chechData();
    if (checking === false) return;
    const response = await CreateNewRestaurantData(
      data,
      page,
      "put",
      id,
      imageToBackend
    );
  };
  const saved = async () => {
    const checking = await chechData();
    if (checking === false) return;
    const response = await CreateNewRestaurantData(
      data,
      page,
      "post",
      "",
      imageToBackend
    );
    updateRestaurantId(response.data.ResturentId);
    updatePersonalDetails(response);
  };
  const deleted = async () => {
    const checking = await chechData();
    if (checking === false) return;
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
