import React, { Component } from "react";
import "flexboxgrid2";
import "./App.css";

import Header from "./Header";
import Explore from "./Explore";
import Experiences from "./Experiences";
import Homes from "./Homes";
import Featured from "./Featured";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Explore />
        <Experiences />
        <Homes />
        <Featured />
        <Footer />
      </div>
    );
  }
}

export default App;
