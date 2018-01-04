import React from "react";
import styled from "styled-components";

import Logo from "./Logo/";
import Search from "./Search/";
import Menu from "./Menu";

import { Container } from "./../styled";

const Header = styled.header`
  border-bottom: 1px solid rgba(72, 72, 72, 0.3);
`;

export default () => {
  return (
    <Header className="App-header">
      <Container>
        <Logo />
        <Search />
        <Menu />
      </Container>
    </Header>
  );
};
