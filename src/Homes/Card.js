import React from "react";
import styled from "styled-components";

import star from "./../star.svg";

const Card = styled.div`
    float: left;
    max-width: 19rem;
    margin-right: 1rem;
  `,
  Image = styled.img`
    max-width: 19rem;
  `,
  Cost = styled.div`
    font-weight: 600;
    float: left;
    margin-right: 0.4rem;
  `,
  Title = styled.div`
    font-size: 15px;
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
  Rating = styled.div`
    float: left;
    margin-right: 0.4rem;
  `;

export default ({ props }) => {
  return (
    <Card>
      <Image src={require(`./${props.image}`)} />
      <Title>
        <Cost>${props.cost}</Cost>
        {props.title}
      </Title>
      {/* <Stars>⭐️</Stars> */}
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
  );
};
