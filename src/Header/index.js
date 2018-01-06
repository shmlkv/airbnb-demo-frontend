import React from "react";

import Logo from "./Logo/";
import Search from "./Search/";
import Menu from "./Menu";

import { Header, ContainerFlex } from "./../UI";

export default () => {
  return (
    <Header>
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
