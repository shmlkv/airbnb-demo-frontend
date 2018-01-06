import React from "react";

import Card from "./Card";
import {
  Title,
  Container,
  More,
  ScrollWrap,
  ScrollButton,
  TitleWrap
} from "./../UI";

const homes = [
  {
    title: "La Salentina, see, nature & relax",
    image: "La Salentina.png",
    cost: 82,
    type: "Entrie house",
    beds: "9 beds",
    reviews: 97,
    stars: 5
  },
  {
    title: "Your private 3 bedr. riad and exclusi…",
    image: "Your private 3 bedr.png",
    cost: 82,
    type: "Entrie house",
    beds: "5 beds",
    reviews: 161,
    stars: 5
  },
  {
    title: "Dreamy Tropical Tree House",
    image: "Dreamy Tropical.png",
    cost: 200,
    type: "Entrie treehouse",
    beds: "1 bed",
    reviews: 364,
    stars: 5
  }
];

export default () => {
  return (
    <Container className="col-xs">
      <TitleWrap>
        <Title>Homes</Title>
        <More href="">See all</More>
      </TitleWrap>
      <ScrollWrap>{homes.map(home => <Card props={home} />)}</ScrollWrap>
      <ScrollButton />
    </Container>
  );
};
