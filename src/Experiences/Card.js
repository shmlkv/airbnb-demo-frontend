import React from "react";
import styled from "styled-components";

import {
  CardContainer,
  Card,
  CardImage,
  CardTitle,
  CardStar,
  CardInlinePrice,
  CardReviews
} from "../UI";

import star from "./star.svg";

const Rating = styled.div`
  margin-right: 0.4rem;
`;

export default ({ experience }) => {
  return (
    <CardContainer className="col-lg-3 col-sm-4 col-xs-6">
      <Card href="">
        <CardImage src={require(`./${experience.image}`)} />
        <CardTitle>
          <CardInlinePrice>${experience.cost}</CardInlinePrice>
          {experience.title}
        </CardTitle>
        <Rating>
          <CardStar src={star} alt="" />
          <CardStar src={star} alt="" />
          <CardStar src={star} alt="" />
          <CardStar src={star} alt="" />
          <CardStar src={star} alt="" />
          <CardReviews>{experience.reviews} reviews</CardReviews>
        </Rating>
      </Card>
    </CardContainer>
  );
};
