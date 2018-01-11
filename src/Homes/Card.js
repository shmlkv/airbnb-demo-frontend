import React from "react";
import styled from "styled-components";

import {
  Card,
  Title,
  Image,
  Star,
  InlinePrice,
  Rating,
  Reviews
} from "../UI/Card";

import star from "./star.svg";
const HomeCard = styled(Card)`
  padding: 0 0.5rem 2.5rem 0.5rem;
  margin: 0;
`;
const OwnerCharacteristic = styled.div`
  margin-left: 0.4rem;
  font-size: 12px;
  margin-top: 0.25rem;
`;

const Description = styled.span`
  margin-top: 0.25rem;
`;

export default ({ home, className, ...props }) => {
  return (
    <HomeCard className={className} href="">
      <Image src={require(`./${home.image}`)} />
      <Title>
        <InlinePrice>${home.cost}</InlinePrice>
        {home.title}
      </Title>
      <Description>
        {home.type} · {home.beds}
      </Description>
      <Rating>
        <Star src={star} alt="" />
        <Star src={star} alt="" />
        <Star src={star} alt="" />
        <Star src={star} alt="" />
        <Star src={star} alt="" />
        <Reviews>{home.reviews} reviews</Reviews>
        <OwnerCharacteristic> · Superhost</OwnerCharacteristic>
      </Rating>
    </HomeCard>
  );
};
