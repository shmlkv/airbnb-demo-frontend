import React from "react";

import Card from "./Card";
import { Title, Container, Header, ScrollWrap } from "./../styled";

const title = "Explore Airbnb",
  items = [
    { title: "Homes", image: "Rectangle 2@2x-2.png" },
    { title: "Experiences", image: "Rectangle 2@2x-1.png" },
    { title: "Restaurants", image: "Rectangle 2.png" }
  ];

export default () => {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
      </Header>
      <ScrollWrap>{items.map(item => <Card props={item} />)}</ScrollWrap>
    </Container>
  );
};
