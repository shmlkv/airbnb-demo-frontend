import React from "react";

import { CardContainer, Card, CardImage, CardTitle } from "./../UI";

export default ({ destination }) => {
  return (
    <CardContainer className="col-lg-2 col-sm-3 col-xs-4">
      <Card href="">
        <CardImage src={require(`./${destination.image}`)} />
        <CardTitle>{destination.title}</CardTitle>
      </Card>
    </CardContainer>
  );
};
