import { AllRoutes } from "./AllRoutes";
import classes from "./App.module.css";
import Auth from "./components/Authentication/Auth";
import Header from "./components/header/Header";
import Notifications from "./components/Notification/Notifications";
import Location from "./components/Location/Location";

function App() {
  return (
    <div className={classes.App}>
      <Location />
      <Notifications />
      <div className={classes.header}>
        <Header />
      </div>
      <AllRoutes />
      <Auth />
    </div>
  );
}

export default App;
