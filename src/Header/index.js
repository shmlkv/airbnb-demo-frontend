import React from "react";
import styled from "styled-components";

import Logo from "./Logo/";
import Search from "./Search/";
import Menu from "./Menu";

const Header = styled.header`
  border-bottom: 1px solid rgba(72, 72, 72, 0.3);
`;

const Wrapper = styled.div`
  max-width: 966px;
  margin: 0 auto;
  clear: both;
`;

export default () => {
  return (
    <Header className="App-header">
      <Wrapper>
        <Logo />
        <Search />
        <Menu />
      </Wrapper>
      {/* <h1 className="App-title">Welcome to React</h1> */}
    </Header>
  );
};
