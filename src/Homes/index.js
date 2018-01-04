import React from "react";

import Card from "./Card";
import { Title, Container, More, ScrollWrap, Header } from "./../styled";

const title = "Homes",
  items = [
    {
      title: "La Salentina, see, nature & relax",
      image: "Rectangle 6-2.png",
      cost: 82,
      type: "Entrie house",
      beds: "9 beds",
      reviews: 97,
      stars: 5
    },
    {
      title: "Your private 3 bedr. riad and exclusi…",
      image: "Rectangle 6-1.png",
      cost: 82,
      type: "Entrie house",
      beds: "5 beds",
      reviews: 161,
      stars: 5
    },
    {
      title: "Dreamy Tropical Tree House",
      image: "Rectangle 6-3.png",
      cost: 200,
      type: "Entrie treehouse",
      beds: "1 bed",
      reviews: 364,
      stars: 5
    }
  ];

export default () => {
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
