import React, { Component } from "react";
import "flexboxgrid2";
import "./App.css";

import Header from "./Header";
import Explore from "./Explore";
import Experiences from "./Experiences";
import Homes from "./Homes";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Explore />
        <Experiences />
        <Homes />
      </div>
    );
  }
}

export default App;
