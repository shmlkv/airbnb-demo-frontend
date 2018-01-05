import React from "react";

import Card from "./Card";
import { Title, Container, ScrollWrap, More, Header } from "./../UI";

const items = [
  {
    title: "Forest therapy",
    image: "Forest therapy.png",
    cost: 29,
    reviews: 44,
    stars: 5
  },
  {
    title: "Whale watching",
    image: "Whale watching.png",

    cost: 69,
    reviews: 46,
    stars: 5
  },
  {
    title: "Table Mountain Summi",
    image: "Table Mountain Summi.png",
    cost: 69,
    reviews: 44,
    stars: 5
  },
  {
    title: "Salsa Night",
    image: "Salsa Night.png",
    cost: 50,
    reviews: 44,
    stars: 5
  }
];

export default ({ title = "Experiences" }) => {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <More href="">See all</More>
      </Header>
      <ScrollWrap>{items.map(item => <Card props={item} />)}</ScrollWrap>
    </Container>
  );
};
