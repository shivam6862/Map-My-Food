import { AllRoutes } from "./AllRoutes";
import classes from "./App.module.css";
import Auth from "./components/Authentication/Auth";

function App() {
  return (
    <div className={classes.App}>
      <AllRoutes />
      <Auth />
    </div>
  );
}

export default App;
