import React from "react";
import styled from "styled-components";

import star from "./../star.svg";

const Card = styled.a`
    float: left;
    max-width: 14rem;
    margin-right: 1rem;
    color: #383838;
    text-decoration: none;
  `,
  Image = styled.img`
    max-width: 14rem;
  `,
  Cost = styled.div`
    font-weight: 600;
    float: left;
    margin-right: 0.4rem;
  `,
  Title = styled.div`
    font-size: 15px;
  `,
  Star = styled.img`
    margin-right: 0.25rem;
    float: left;
    margin-top: 0.25rem;
  `,
  Rating = styled.div`
    float: left;
    margin-right: 0.4rem;
  `,
  Reviews = styled.div`
    float: left;
    margin-top: 0.25rem;
    font-size: 12px;
  `;

export default ({ props }) => {
  return (
    <Card href="">
      <Image src={require(`./${props.image}`)} />
      <Title>
        <Cost>${props.cost}</Cost>
        {props.title}
      </Title>
      <Rating>
        <Star src={star} alt="" />
        <Star src={star} alt="" />
        <Star src={star} alt="" />
        <Star src={star} alt="" />
        <Star src={star} alt="" />
        <Reviews>{props.reviews} reviews</Reviews>
      </Rating>
    </Card>
  );
};
