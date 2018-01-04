import React from "react";

import Card from "./Card";
import { Title, Container, ScrollWrap, Header } from "./../styled";

const title = "Featured destination",
  items = [
    {
      title: "Paris",
      image: "Rectangle 6@2x-12.png"
    },
    {
      title: "Miami",
      image: "Rectangle 6@2x-11.png"
    },
    {
      title: "Tokyo",
      image: "Rectangle 6@2x-10.png"
    },
    {
      title: "Cape town",
      image: "Rectangle 6@2x-9.png"
    },
    {
      title: "Seuol",
      image: "Rectangle 6@2x-8.png"
    },
    {
      title: "Los Angeles",
      image: "Rectangle 6@2x-7.png"
    }
  ];

export default () => {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
      </Header>
      <ScrollWrap>{items.map(item => <Card props={item} />)}</ScrollWrap>
    </Container>
  );
};
