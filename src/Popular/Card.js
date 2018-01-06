import React from "react";
import styled from "styled-components";

import { CardContainer, Card, CardImage } from "./../UI";

const Type = styled.div`
  font-size: 10px;
  font-weight: blod;
  margin-top: 0.5rem;
  text-transform: uppercase;
`;
const CardTitle = styled.p`
  font-size: 18px;
  margin: 2px 0 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-weight: bold;
`;

const Price = styled.div`
  margin-top: 0.25rem;
  font-size: 18px;
`;

export default ({ popular }) => {
  return (
    <CardContainer className="col-lg-3 col-md-4 col-sm-4 col-xs-6">
      <Card href="">
        <CardImage src={require(`./${popular.image}`)} />
        <Type>{popular.type}</Type>
        <CardTitle>{popular.title}</CardTitle>
        <Price>About ${popular.price} per persone</Price>
      </Card>
    </CardContainer>
  );
};