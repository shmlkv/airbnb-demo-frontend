import React from "react";

import Card from "./Card";
import { Title, Container, Header, ScrollWrap } from "./../UI";

const title = "Explore Airbnb",
  items = [
    { title: "Homes", image: "Homes.png" },
    { title: "Experiences", image: "Experiences.png" },
    { title: "Restaurants", image: "Restaurants.png" }
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
