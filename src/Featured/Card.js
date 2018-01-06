import React from "react";
import styled from "styled-components";

import { CardContainer, Card, CardImage, CardTitle } from "./../UI";

export default ({ props }) => {
  return (
    <CardContainer className="col-lg-2 col-sm-3 col-xs-4">
      <Card href="">
        <CardImage src={require(`./${props.image}`)} />
        <CardTitle>{props.title}</CardTitle>
      </Card>
    </CardContainer>
  );
};
