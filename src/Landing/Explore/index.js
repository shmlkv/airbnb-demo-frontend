import React from "react";

import Card from "./Card";
import { Title, Container, TitleWrap, ScrollWrap } from "../../UI";

const explores = [
  { title: "Homes", image: "Homes.png", link: "/homes" },
  { title: "Experiences", image: "Experiences.png", link: "/" },
  { title: "Restaurants", image: "Restaurants.png", link: "/" }
];

export default () => {
  return (
    <Container>
      <TitleWrap>
        <Title>Explore Airbnb</Title>
      </TitleWrap>
      <ScrollWrap>
        {explores.map(explore => <Card explore={explore} />)}
      </ScrollWrap>
    </Container>
  );
};
