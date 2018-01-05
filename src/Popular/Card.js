import React from "react";
import styled from "styled-components";

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

const Type = styled.div`
  float: left;
  font-size: 10px;
  font-weight: blod;
  width: 100%;
  margin-top: 0.5rem;
  text-transform: uppercase;
`;

const Title = styled.div`
  font-size: 15px;
  font-weight: 600;
  float: left;
  margin-top: 0.25rem;
`;

const Cost = styled.div`
  float: left;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 18px;
`;

const Container = styled.div`
  padding: 0;
`;

export default ({ props }) => {
  return (
    <Container className="col-lg-3 col-md-4 col-sm-4 col-xs-6">
      <Card href="">
        <Image src={require(`./${props.image}`)} />
        <Type>{props.type}</Type>
        <Title>{props.title}</Title>
        <Cost>About ${props.cost} per persone</Cost>
      </Card>
    </Container>
  );
};
