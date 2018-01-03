import React from "react";

import Card from "./Card";
import { Title, Wrapper, SeeAll, TitleWrap } from "./../styled";

const title = "Experiences",
  items = [
    {
      title: "Forest therapy",
      image: "Rectangle@2x-3.png",
      cost: 29,
      reviews: 44,
      stars: 5
    },
    {
      title: "Whale watching",
      image: "Rectangle@2x-2.png",
      cost: 69,
      reviews: 46,
      stars: 5
    },
    {
      title: "Table Mountain Summi",
      image: "Rectangle@2x-1.png",
      cost: 69,
      reviews: 44,
      stars: 5
    },
    {
      title: "Salsa Night",
      image: "Rectangle@2x.png",
      cost: 50,
      reviews: 44,
      stars: 5
    }
  ];

export default () => {
  return (
    <Wrapper>
      <TitleWrap>
        <Title>{title}</Title>
        <SeeAll>See all</SeeAll>
      </TitleWrap>
      {items.map(item => <Card props={item} />)}
    </Wrapper>
  );
};
