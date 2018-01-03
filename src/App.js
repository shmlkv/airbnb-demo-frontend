import React, { Component } from "react";
import Header from "./Header";
import Explore from "./Explore";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="Wrap">
        <Header />
        <Explore />
      </div>
    );
  }
}

export default App;
