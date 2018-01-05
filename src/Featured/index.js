import React from "react";

import Card from "./Card";
import { Title, Container, ScrollWrap, ScrollButton, Header } from "./../UI";

const destinations = [
  { title: "Paris", image: "Paris.png" },
  { title: "Miami", image: "Miami.png" },
  { title: "Tokyo", image: "Tokyo.png" },
  { title: "Cape town", image: "Cape town.png" },
  { title: "Seuol", image: "Seuol.png" },
  { title: "Los Angeles", image: "Los Angeles.png" }
];

export default () => {
  return (
    <Container>
      <Header>
        <Title>Featured destination</Title>
      </Header>
      <ScrollWrap>
        {destinations.map(destination => <Card props={destination} />)}
        <ScrollButton />
      </ScrollWrap>
    </Container>
  );
};
