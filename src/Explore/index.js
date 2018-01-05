import React from "react";

import Card from "./Card";
import { Title, Container, Header, ScrollWrap } from "./../UI";

const explores = [
  { title: "Homes", image: "Homes.png" },
  { title: "Experiences", image: "Experiences.png" },
  { title: "Restaurants", image: "Restaurants.png" }
];

export default () => {
  return (
    <Container>
      <Header>
        <Title>Explore Airbnb</Title>
      </Header>
      <ScrollWrap>
        {explores.map(explore => <Card props={explore} />)}
      </ScrollWrap>
    </Container>
  );
};
