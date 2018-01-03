import React from "react";
import styled from "styled-components";

const Card = styled.div`
    width: 19rem;
    height: 4.5rem;
    display: inline-block;
    margin-right: 1.1rem;
    border: 1px solid rgba(72, 72, 72, 0.2);
    box-sizing: border-box;
    box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
    border-radius: 4px;
  `,
  CardImage = styled.img`
    width: 6rem;
    height: 4.5rem;
    float: left;
    margin-right: 1.4rem;
  `,
  CardTitle = styled.div`
    font-size: 17px;
    font-weight: 600;
    padding: 1.4rem;
  `;

export default ({ title, image }) => {
  return (
    <Card>
      <CardImage src={require(`./${image}`)} />
      <CardTitle>{title}</CardTitle>
    </Card>
  );
};
