import React from "react";
import styled from "styled-components";

import star from "./star.svg";

const Card = styled.div`
  float: left;
  margin-right: 1rem;
  color: #383838;
  text-decoration: none;
`;

const Image = styled.img`
  width: 100%;
`;

const Cost = styled.span`
  font-weight: 600;
  float: left;
  margin-right: 0.4rem;
`;

const Title = styled.span`
  font-size: 15px;
`;

const Star = styled.img`
  margin-right: 0.25rem;
  float: left;
  margin-top: 0.25rem;
`;

const Rating = styled.div`
  float: left;
  margin-right: 0.4rem;
`;

const Reviews = styled.div`
  float: left;
  margin-top: 0.25rem;
  font-size: 12px;
`;

const Container = styled.div`
  padding: 0;
`;

export default ({ props }) => {
  return (
    <Container className="col-lg-3 col-sm-4 col-xs-6">
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
    </Container>
  );
};
