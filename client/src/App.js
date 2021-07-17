import React, { Fragment } from "react";
import "./App.css";

// components
import InputStudent from "./components/InputStudent";
import ListSudent from "./components/ListSudent";

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputStudent />
        <ListSudent />
      </div>
    </Fragment>
  );
}

export default App;
