import React from 'react';

import Card from './Card';
import { Title, Container, More, ScrollWrap, ScrollButton, TitleWrap } from '../../UI';

import chumleysImage from './Chumleys.png';
import hanjanImage from './Hanjan.png';
import primemeatsImage from './Prime Meats.png';
import seapriceImage from './Seaprice.png';

const populars = [
  {
    title: 'Chumley’s',
    image: chumleysImage,
    price: 60,
    type: 'Speakeasy',
  },
  {
    title: 'Hanjan',
    image: hanjanImage,
    price: 50,
    type: 'Korean gastropub',
  },
  {
    title: 'Prime Meats',
    image: primemeatsImage,
    price: 50,
    type: 'Speakeasy',
  },
  {
    title: 'Seaprice',
    image: seapriceImage,
    price: 70,
    type: 'Fine seafood',
  },
];

export default () => (
  <Container>
    <TitleWrap>
      <Title>Popular reservations around the world</Title>
      <More href="">See all</More>
    </TitleWrap>
    <ScrollWrap>{populars.map(popular => <Card popular={popular} />)}</ScrollWrap>
    <ScrollButton />
  </Container>
);
