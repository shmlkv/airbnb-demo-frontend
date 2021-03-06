import React from 'react';

import Card from '../../Homes/Card';
import { Title, Container, More, ScrollWrap, ScrollButton, TitleWrap } from '../../UI';

import img1 from '../../Homes/La Salentina.png';
import img2 from '../../Homes/Your private 3 bedr.png';
import img3 from '../../Homes/Dreamy Tropical.png';

const homes = [
  {
    title: 'La Salentina, see, nature & relax',
    image: img1,
    cost: 82,
    type: 'Entrie house',
    beds: '9 beds',
    reviews: 97,
    stars: 5,
  },
  {
    title: 'Your private 3 bedr. riad and exclusi…',
    image: img2,
    cost: 82,
    type: 'Entrie house',
    beds: '5 beds',
    reviews: 161,
    stars: 5,
  },
  {
    title: 'Dreamy Tropical Tree House',
    image: img3,
    cost: 200,
    type: 'Entrie treehouse',
    beds: '1 bed',
    reviews: 364,
    stars: 5,
  },
];

export default () => (
  <Container>
    <TitleWrap>
      <Title>Homes</Title>
      <More href="">See all</More>
    </TitleWrap>
    <ScrollWrap>{homes.map(home => <Card home={home} />)}</ScrollWrap>
    <ScrollButton />
  </Container>
);
