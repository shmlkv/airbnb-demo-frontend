import React from "react";
import styled from "styled-components";

import Logo from "./Logo/";
import Search from "./Search/";
import Menu from "./Menu";

import { Grid, Row, Col } from "react-flexbox-grid";
import { Container } from "./../styled";

const Header = styled.header`
  border-bottom: 1px solid rgba(72, 72, 72, 0.3);
`;

export default () => {
  return (
    <Header className="App-header">
      <Container>
        <Grid fluid>
          <Row>
            <Col md={1} sm={1} xs={2}>
              <Logo />
            </Col>
            <Col md={5} sm={7} xs={10}>
              <Search />
            </Col>
            <Col md={4} mdOffset={2}>
              <Menu />
            </Col>
          </Row>
        </Grid>
      </Container>
    </Header>
  );
};
