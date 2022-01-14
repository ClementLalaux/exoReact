// 1. Faire l'import de react
import React from "react";
import { Fragment } from "react/cjs/react.development";
import "./app.css";
import { Routing } from "./Routing";

export class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Routing />
      </Fragment>
    );
  }
}

export default App;
