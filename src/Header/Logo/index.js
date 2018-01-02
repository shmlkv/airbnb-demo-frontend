import React from "react";
import styled from "styled-components";
import logo from "./logo.svg";

const Logo = styled.img`
  margin: 1.5rem 0;
  float: left;
`;

export default () => {
  return <Logo src={logo} className="App-logo" alt="logo" />;
};
