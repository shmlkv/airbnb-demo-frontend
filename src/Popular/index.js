import React from "react";

import Card from "./Card";
import {
  Title,
  Container,
  More,
  ScrollWrap,
  ScrollButton,
  Header
} from "./../UI";

const items = [
  {
    title: "Chumley’s",
    image: "Chumleys.png",
    cost: 60,
    type: "Speakeasy"
  },
  {
    title: "Hanjan",
    image: "Hanjan.png",
    cost: 50,
    type: "Korean gastropub"
  },
  {
    title: "Prime Meats",
    image: "Prime Meats.png",
    cost: 50,
    type: "Speakeasy"
  },
  {
    title: "Seaprice",
    image: "Seaprice.png",
    cost: 70,
    type: "Fine seafood"
  }
];

export default () => {
  return (
    <Container>
      <Header>
        <Title>Popular reservations around the world</Title>
        <More href="">See all</More>
      </Header>
      <ScrollWrap>{items.map(item => <Card props={item} />)}</ScrollWrap>
      <ScrollButton />
    </Container>
  );
};
