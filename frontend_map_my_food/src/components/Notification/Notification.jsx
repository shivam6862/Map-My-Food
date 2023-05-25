import React, { useEffect, useState, useContext } from "react";
import classes from "./Notification.module.css";
import NotificationContext from "../store/Notification/Notification-context";

const Notification = (props) => {
  const notifictionCtx = useContext(NotificationContext);
  const [width, setWidth] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const deleteNotification = (id) => {
    notifictionCtx.onDelete(id);
  };
  const handleStartTimer = () => {
    const id = setInterval(() => {
      setWidth((prev) => {
        if (prev < 100) {
          return prev + 0.5;
        }
        clearInterval(id);
        return prev;
      });
    }, 20);
    setIntervalId(id);
  };
  const handlePauseTimer = () => {
    clearInterval(intervalId);
  };

  useEffect(() => {
    if (width === 100) {
      handlePauseTimer();
      setTimeout(() => {
        notifictionCtx.onDelete(props.id);
      }, 300);
    }
  }, [width]);
  useEffect(() => {
    handleStartTimer();
  }, []);

  return (
    <div
      onMouseEnter={handlePauseTimer}
      onMouseLeave={handleStartTimer}
      key={props.id}
      className={`${classes.notification} ${classes.buttomright}`}
      style={{ backgroundColor: props.type }}
    >
      <button onClick={() => deleteNotification(props.id)}>X</button>
      <div>
        <p className={classes.title}>{props.message}</p>
      </div>
      <div
        className={`${classes.lowerboder}`}
        style={{ width: width + "%" }}
      ></div>
    </div>
  );
};
export default Notification;
