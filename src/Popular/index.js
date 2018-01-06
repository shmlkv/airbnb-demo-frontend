import React from "react";

import Card from "./Card";
import {
  Title,
  Container,
  More,
  ScrollWrap,
  ScrollButton,
  TitleWrap
} from "../UI";

const populars = [
  {
    title: "Chumley’s",
    image: "Chumleys.png",
    price: 60,
    type: "Speakeasy"
  },
  {
    title: "Hanjan",
    image: "Hanjan.png",
    price: 50,
    type: "Korean gastropub"
  },
  {
    title: "Prime Meats",
    image: "Prime Meats.png",
    price: 50,
    type: "Speakeasy"
  },
  {
    title: "Seaprice",
    image: "Seaprice.png",
    price: 70,
    type: "Fine seafood"
  }
];

export default () => {
  return (
    <Container className="col-xs">
      <TitleWrap>
        <Title>Popular reservations around the world</Title>
        <More href="">See all</More>
      </TitleWrap>
      <ScrollWrap>
        {populars.map(popular => <Card popular={popular} />)}
      </ScrollWrap>
      <ScrollButton />
    </Container>
  );
};
