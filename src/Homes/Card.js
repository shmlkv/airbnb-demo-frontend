import React from "react";
import styled from "styled-components";

import star from "./../star.svg";

const Card = styled.a`
    float: left;
    max-width: 19rem;
    margin-right: 1rem;
    text-decotarion: none;
    color: #383838;
  `,
  Image = styled.img`
    max-width: 100%;
  `,
  Cost = styled.div`
    font-weight: 600;
    float: left;
    margin-right: 0.4rem;
  `,
  Title = styled.div`
    font-size: 15px;
    font-weight: 600;
    float: left;
  `,
  Reviews = styled.div`
    float: left;
    margin-left: 0.4rem;
    font-size: 12px;
    margin-top: 0.25rem;
  `,
  OwnerCharacteristic = styled.div`
    float: left;
    margin-left: 0.4rem;
    font-size: 12px;
    margin-top: 0.25rem;
  `,
  Star = styled.img`
    margin-right: 0.25rem;
    float: left;
    margin-top: 0.25rem;
  `,
  Description = styled.div`
    float: left;
    width: 100%;
  `,
  Rating = styled.div`
    float: left;
    margin-right: 0.4rem;
  `,
  Container = styled.div``;

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
