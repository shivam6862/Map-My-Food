import { useContext } from "react";
import NotificationContext from "../store/Notification/Notification-context";

const backGroundColor = {
  Success: "#2ecc71",
  Error: "#e74c3c",
  Info: "#3498db",
  Warn: "#f1c40f",
};

export const useNotification = () => {
  const notificationCtx = useContext(NotificationContext);
  const NotificationHandler = (message, status) => {
    const color = backGroundColor[status];
    notificationCtx.onMessage(message, color);
  };
  return { NotificationHandler };
};
