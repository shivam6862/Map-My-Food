import { AllRoutes } from "./AllRoutes";
import classes from "./App.module.css";
import Auth from "./components/Authentication/Auth";
import Header from "./components/header/Header";
function App() {
  return (
    <div className={classes.App}>
      <div className={classes.header}>
        <Header />
      </div>
      <AllRoutes />
      <Auth />
    </div>
  );
}

export default App;
