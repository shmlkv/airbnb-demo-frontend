import React from 'react';

import Card from './Card';

import { Title, Container, ScrollWrap, ScrollButton, More, TitleWrap } from '../../UI';

const experiences = [
  {
    title: 'Forest therapy',
    image: './Forest therapy.png',
    cost: 29,
    reviews: 44,
    stars: 5,
  },
  {
    title: 'Whale watching',
    image: './Whale watching.png',

    cost: 69,
    reviews: 46,
    stars: 5,
  },
  {
    title: 'Table Mountain Summi',
    image: './Table Mountain Summi.png',
    cost: 69,
    reviews: 44,
    stars: 5,
  },
  {
    title: 'Salsa Night',
    image: './Salsa Night.png',
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
