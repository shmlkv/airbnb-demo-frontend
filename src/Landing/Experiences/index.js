import React from 'react';

import Card from './Card';

import { Title, Container, ScrollWrap, ScrollButton, More, TitleWrap } from '../../UI';

import forestImage from './Forest therapy.png';
import whaleImage from './Whale watching.png';
import mountainImage from './Table Mountain Summi.png';
import salsaImage from './Salsa Night.png';

const experiences = [
  {
    title: 'Forest therapy',
    image: forestImage,
    cost: 29,
    reviews: 44,
    stars: 5,
  },
  {
    title: 'Whale watching',
    image: whaleImage,
    cost: 69,
    reviews: 46,
    stars: 5,
  },
  {
    title: 'Table Mountain Summi',
    image: mountainImage,
    cost: 69,
    reviews: 44,
    stars: 5,
  },
  {
    title: 'Salsa Night',
    image: salsaImage,
    cost: 50,
    reviews: 44,
    stars: 5,
  },
];

export default ({ title = 'Experiences' }) => (
  <Container>
    <TitleWrap>
      <Title>{title}</Title>
      <More href="">See all</More>
    </TitleWrap>
    <ScrollWrap>{experiences.map(experience => <Card experience={experience} />)}</ScrollWrap>
    <ScrollButton />
  </Container>
);
