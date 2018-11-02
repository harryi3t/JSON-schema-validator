import React from "react";
import { render } from "react-dom";
import Main from "./containers/Main";
require("./styles.css");

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <Main />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
