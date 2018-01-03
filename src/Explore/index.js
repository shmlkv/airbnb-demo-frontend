import React from "react";

import Card from "./Card";
import { Title, Wrapper, TitleWrap } from "./../styled";

const title = "Explore Airbnb",
  items = [
    { title: "Homes", image: "Rectangle 2@2x-2.png" },
    { title: "Experiences", image: "Rectangle 2@2x-1.png" },
    { title: "Restaurants", image: "Rectangle 2.png" }
  ];

export default () => {
  return (
    <Wrapper>
      <TitleWrap>
        <Title>{title}</Title>
      </TitleWrap>
      {items.map(item => <Card props={item} />)}
    </Wrapper>
  );
};
