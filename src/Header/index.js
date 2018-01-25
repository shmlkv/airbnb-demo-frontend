import React from 'react';

import Logo from './Logo/';
import Search from './Search/';
import Menu from './Menu';

import { Header, ContainerFlex } from '../UI';

export default ({ placeHolder }) => (
  <Header>
    <ContainerFlex>
      <div className="col-lg-1 col-md-1 col-sm-2 col-xs-2">
        <Logo />
      </div>
      <div className="col-lg-5 col-sm-7 col-xs-10">
        <Search placeHolder={placeHolder} />
      </div>
      <div className="col-lg-4 col-lg-offset-2 hidden-sm hidden-xs">
        <Menu />
      </div>
    </ContainerFlex>
  </Header>
);
