import React, { Component } from "react";
import Header from "./Header";
import Content from "./Content";
// import styled from "styled-components";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="Wrap">
        <Header />
        <Content />
      </div>
    );
  }
}

export default App;
