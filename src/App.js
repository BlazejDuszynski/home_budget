import { Fragment } from "react";
import "./App.css";
import AppHeader from "./Components/Layout/AppHeader";
import Main from "./Components/UI/Main";
import DateProvider from "./Store/DateProvider";
import RevenuesProvider from "./Store/RevenuesProvider";

function App() {
  return (
    <Fragment>
      <DateProvider>
        <AppHeader />
        <RevenuesProvider>
          <Main />
        </RevenuesProvider>
      </DateProvider>
    </Fragment>
  );
}

export default App;
