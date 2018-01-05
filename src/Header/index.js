import React from "react";
import styled from "styled-components";

import Logo from "./Logo/";
import Search from "./Search/";
import Menu from "./Menu";

import { ContainerFlex } from "./../UI";

const Header = styled.header`
  border-bottom: 1px solid rgba(72, 72, 72, 0.3);
`;

export default () => {
  return (
    <Header className="App-header">
      <ContainerFlex>
        <div className="col-lg-1 col-sm-1 col-xs-2">
          <Logo />
        </div>
        <div className="col-lg-5 col-sm-7 col-xs-10">
          <Search />
        </div>
        <div className="col-lg-4 col-lg-offset-2 hidden-sm hidden-xs">
          <Menu />
        </div>
      </ContainerFlex>
    </Header>
  );
};
