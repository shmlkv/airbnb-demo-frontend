import React from "react";
import styled from "styled-components";

import {
  CardContainer,
  Card,
  CardTitle,
  CardImage,
  CardStar,
  CardInlinePrice,
  CardRating,
  CardReviews
} from "./../UI";

import star from "./star.svg";

const OwnerCharacteristic = styled.div`
  margin-left: 0.4rem;
  font-size: 12px;
  margin-top: 0.25rem;
`;

const Description = styled.span`
  margin-top: 0.25rem;
`;

export default ({ home }) => {
  return (
    <CardContainer className="col-lg-4 col-sm-5 col-xs-7">
      <Card href="">
        <CardImage src={require(`./${home.image}`)} />
        <CardTitle>
          <CardInlinePrice>${home.cost}</CardInlinePrice>
          {home.title}
        </CardTitle>
        <Description>
          {home.type} · {home.beds}
        </Description>
        <CardRating>
          <CardStar src={star} alt="" />
          <CardStar src={star} alt="" />
          <CardStar src={star} alt="" />
          <CardStar src={star} alt="" />
          <CardStar src={star} alt="" />
          <CardReviews>{home.reviews} reviews</CardReviews>
          <OwnerCharacteristic> · Superhost</OwnerCharacteristic>
        </CardRating>
      </Card>
    </CardContainer>
  );
};
