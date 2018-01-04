import React from "react";
import styled from "styled-components";

const Card = styled.a`
    width: 19rem;
    height: 4.5rem;
    display: inline-block;
    box-sizing: border-box;
    margin-right: 1.1rem;
    border: 1px solid rgba(72, 72, 72, 0.2);
    box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
    border-radius: 4px;
    color: #383838;
    text-decoration: none;
  `,
  CardImage = styled.img`
    width: 6rem;
    height: 100%;
    float: left;
    margin-right: 1.4rem;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  `,
  CardTitle = styled.div`
    font-size: 17px;
    font-weight: 600;
    padding: 1.4rem;
  `;

export default ({ props }) => {
  return (
    <Card href="">
      <CardImage src={require(`./${props.image}`)} />
      <CardTitle>{props.title}</CardTitle>
    </Card>
  );
};
