import React from "react";
import styled from "styled-components";

import {
  CardContainer,
  Card,
  Image,
  Title,
  Star,
  InlinePrice,
  Reviews
} from "../../UI/Card";

import star from "./star.svg";

const Rating = styled.div`
  margin-right: 0.4rem;
`;

export default ({ experience }) => {
  return (
    <CardContainer className="col-lg-3 col-sm-4 col-xs-6">
      <Card href="">
        <Image src={require(`./${experience.image}`)} />
        <Title>
          <InlinePrice>${experience.cost}</InlinePrice>
          {experience.title}
        </Title>
        <Rating>
          <Star src={star} alt="" />
          <Star src={star} alt="" />
          <Star src={star} alt="" />
          <Star src={star} alt="" />
          <Star src={star} alt="" />
          <Reviews>{experience.reviews} reviews</Reviews>
        </Rating>
      </Card>
    </CardContainer>
  );
};
