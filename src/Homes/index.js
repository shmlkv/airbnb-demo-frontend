import React from "react";

import Card from "./Card";
import {
  Title,
  Container,
  SeeAll,
  TitleWrap,
  CardContainer
} from "./../styled";

const title = "Homes",
  items = [
    {
      title: "La Salentina, see, nature & relax",
      image: "Rectangle 6-2.png",
      cost: 82,
      beds: 9,
      reviews: 97,
      stars: 5
    },
    {
      title: "Your private 3 bedr. riad and exclusi…",
      image: "Rectangle 6-1.png",
      cost: 82,
      beds: 5,
      reviews: 161,
      stars: 5
    },
    {
      title: "Dreamy Tropical Tree House",
      image: "Rectangle 6-3.png",
      cost: 200,
      beds: 5,
      reviews: 161,
      stars: 5
    }
  ];

export default () => {
  return (
    <Container>
      <TitleWrap>
        <Title>{title}</Title>
        <SeeAll>See all</SeeAll>
      </TitleWrap>
      <CardContainer>{items.map(item => <Card props={item} />)}</CardContainer>
    </Container>
  );
};
