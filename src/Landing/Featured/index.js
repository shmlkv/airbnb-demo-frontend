import React from 'react';

import Card from './Card';
import { Title, Container, ScrollWrap, ScrollButton, TitleWrap } from '../../UI';

import parisImage from './Paris.png';
import miamiImage from './Miami.png';
import tokyoImage from './Tokyo.png';
import capetownImage from './Cape town.png';
import seuolImage from './Seuol.png';
import losangelesImage from './Los Angeles.png';

const destinations = [
  { title: 'Paris', image: parisImage },
  { title: 'Miami', image: miamiImage },
  { title: 'Tokyo', image: tokyoImage },
  { title: 'Cape town', image: capetownImage },
  { title: 'Seuol', image: seuolImage },
  { title: 'Los Angeles', image: losangelesImage },
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
