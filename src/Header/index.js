import React from "react";
import styled from "styled-components";

import Logo from "./Logo/";
import Search from "./Search/";
import Menu from "./Menu";

import { Row, Col } from "react-flexbox-grid";
import { Container } from "./../styled";

const Header = styled.header`
  border-bottom: 1px solid rgba(72, 72, 72, 0.3);
`;

export default () => {
  return (
    <Header className="App-header">
      <Container>
        <Row>
          <Col md={1}>
            <Logo />
          </Col>
          <Col md={5}>
            <Search />
          </Col>
          <Col mdOffset={2} md={4}>
            <Menu />
          </Col>
        </Row>
      </Container>
    </Header>
  );
};
