import { Fragment } from "react";
import "./App.css";
import AppHeader from "./Components/Layout/AppHeader";
import Main from "./Components/UI/Main";
import DateProvider from "./Store/DateProvider";
import EntriesProvider from "./Store/EntriesProvider";

function App() {
  return (
    <Fragment>
      <DateProvider>
        <AppHeader />
        <EntriesProvider>
          <Main />
        </EntriesProvider>
      </DateProvider>
    </Fragment>
  );
}

export default App;
