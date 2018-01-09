import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import "normalize.css";
import "flexboxgrid2";
import "./App.css";

import Header from "./Header";

import Landing from "./Landing";
import Homes from "./Homes";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={Landing} />{" "}
          {/* отрендерить компонент Landing когда мы находимся на / */}
          <Route path="/homes" component={Homes} />{" "}
          {/* отрендерить компонент Homes когда мы находимся на /homes/* */}
        </div>
      </BrowserRouter>
    );
  }
}

render(<App />, document.getElementById("root"));

export default App;
