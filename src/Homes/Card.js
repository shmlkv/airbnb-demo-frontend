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
  width: 100%;
`;

export default ({ props }) => {
  return (
    <CardContainer className="col-lg-4 col-sm-5 col-xs-7">
      <Card href="">
        <CardImage src={require(`./${props.image}`)} />
        <CardTitle>
          <CardInlinePrice>${props.cost}</CardInlinePrice>
          {props.title}
        </CardTitle>
        <Description>
          {props.type} · {props.beds}
        </Description>
        <CardRating>
          <CardStar src={star} alt="" />
          <CardStar src={star} alt="" />
          <CardStar src={star} alt="" />
          <CardStar src={star} alt="" />
          <CardStar src={star} alt="" />
          <CardReviews>{props.reviews} reviews</CardReviews>
          <OwnerCharacteristic> · Superhost</OwnerCharacteristic>
        </CardRating>
      </Card>
    </CardContainer>
  );
};
