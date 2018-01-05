import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 0;
`;

const Card = styled.a`
  float: left;
  max-width: 19rem;
  margin-right: 1rem;
  text-decotarion: none;
  color: #383838;
`;

const Image = styled.img`
  max-width: 100%;
`;

const Title = styled.div`
  font-size: 15px;
  font-weight: 600;
  float: left;
`;

export default ({ props }) => {
  return (
    <Container className="col-lg-2 col-sm-3 col-xs-4">
      <Card href="">
        <Image src={require(`./${props.image}`)} />
        <Title>{props.title}</Title>
      </Card>
    </Container>
  );
};
