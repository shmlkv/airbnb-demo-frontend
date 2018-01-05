import React from "react";
import styled from "styled-components";

import star from "./../star.svg";

const Card = styled.a`
  float: left;
  max-width: 100%;
  margin-right: 1rem;
  text-decotarion: none;
  color: #383838;
`;

const Image = styled.img`
  width: 100%;
`;

const Cost = styled.div`
  font-weight: 600;
  float: left;
  margin-right: 0.4rem;
`;

const Title = styled.div`
  font-size: 15px;
  font-weight: 600;
  float: left;
`;

const Reviews = styled.div`
  float: left;
  margin-left: 0.4rem;
  font-size: 12px;
  margin-top: 0.25rem;
`;

const OwnerCharacteristic = styled.div`
  float: left;
  margin-left: 0.4rem;
  font-size: 12px;
  margin-top: 0.25rem;
`;

const Star = styled.img`
  margin-right: 0.25rem;
  float: left;
  margin-top: 0.25rem;
`;

const Description = styled.div`
  float: left;
  width: 100%;
`;

const Rating = styled.div`
  float: left;
  margin-right: 0.4rem;
`;

const Container = styled.div``;

export default ({ props }) => {
  return (
    <Container className="col-lg-4 col-sm-5 col-xs-7">
      <Card href="">
        <Image src={require(`./${props.image}`)} />
        <Title>
          <Cost>${props.cost}</Cost>
          {props.title}
        </Title>
        <Description>
          {props.type} · {props.beds}
        </Description>
        <Rating>
          <Star src={star} alt="" />
          <Star src={star} alt="" />
          <Star src={star} alt="" />
          <Star src={star} alt="" />
          <Star src={star} alt="" />
          <Reviews>{props.reviews} reviews</Reviews>
          <OwnerCharacteristic> · Superhost</OwnerCharacteristic>
        </Rating>
      </Card>
    </Container>
  );
};
