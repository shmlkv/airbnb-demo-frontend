import React from 'react';

import Card from './Card';
import { Title, Container, ScrollWrap, ScrollButton, TitleWrap } from '../../UI';

const destinations = [
  { title: 'Paris', image: './Paris.png' },
  { title: 'Miami', image: './Miami.png' },
  { title: 'Tokyo', image: './Tokyo.png' },
  { title: 'Cape town', image: './Cape town.png' },
  { title: 'Seuol', image: './Seuol.png' },
  { title: 'Los Angeles', image: './Los Angeles.png' },
];

export default () => (
  <Container className="col-xs">
    <TitleWrap>
      <Title>Featured destination</Title>
    </TitleWrap>
    <ScrollWrap>{destinations.map(destination => <Card destination={destination} />)}</ScrollWrap>
    <ScrollButton />
  </Container>
);
