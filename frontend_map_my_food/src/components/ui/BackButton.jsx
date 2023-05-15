import { useNavigate } from "react-router-dom";
import classes from "./BackButton.module.css";

export const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button className={classes.button} onClick={() => navigate(-1)}>
      Back
    </button>
  );
};
