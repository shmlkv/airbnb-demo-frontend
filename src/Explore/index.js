import React from "react";
import styled from "styled-components";

import Card from "./Card";
import { Title } from "./../styled";

const Wrapper = styled.div`
  max-width: 966px;
  margin: 0 auto;
  clear: both;
`;

const title = "Explore Airbnb",
  items = [
    { title: "Homes", image: "Rectangle 2@2x-2.png" },
    { title: "Experiences", image: "Rectangle 2@2x-1.png" },
    { title: "Restaurants", image: "Rectangle 2.png" }
  ];

export default () => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {items.map(item => <Card title={item.title} image={item.image} />)}
    </Wrapper>
  );
};
