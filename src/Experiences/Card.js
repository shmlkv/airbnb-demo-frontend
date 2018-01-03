import React from "react";
import styled from "styled-components";

const Card = styled.div`
    float: left;
    max-width: 14rem;
    margin-right: 1rem;
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
  Stars = styled.div`
    font-size: 15px;
    float: left;
  `,
  Reviews = styled.div`
    float: left;
    margin-right: 0.4rem;
    font-size: 12px;
  `;

export default ({ props }) => {
  return (
    <Card>
      <Image src={require(`./${props.image}`)} />
      <Cost>${props.cost}</Cost>
      <Title>{props.title}</Title>
      {/* <Stars>⭐️</Stars> */}
      <Reviews>{props.reviews} reviews</Reviews>
    </Card>
  );
};
