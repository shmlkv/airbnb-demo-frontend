import React from 'react';

import { CardContainer, Card, Image, Title } from '../../UI/Card';

export default ({ destination }) => (
  <CardContainer className="col-lg-2 col-sm-3 col-xs-4">
    <Card href="">
      <Image src={require(`${destination.image}`)} />
      <Title>{destination.title}</Title>
    </Card>
  </CardContainer>
);
