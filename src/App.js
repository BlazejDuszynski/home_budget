import { Fragment } from "react";
import "./App.css";
import AppHeader from "./Components/Layout/AppHeader";
import Main from "./Components/UI/Main";
import RevenuesProvider from "./Store/RevenuesProvider";

function App() {
  return (
    <Fragment>
      <AppHeader />
      <RevenuesProvider>
        <Main />
      </RevenuesProvider>
    </Fragment>
  );
}

export default App;
