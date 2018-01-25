import React from 'react';

import Card from './Card';
import { Title, Container, TitleWrap, ScrollWrap } from '../../UI';

const explores = [
  { title: 'Homes', image: 'Homes.png' },
  { title: 'Experiences', image: 'Experiences.png' },
  { title: 'Restaurants', image: 'Restaurants.png' },
];

export default () => (
  <Container>
    <TitleWrap>
      <Title>Explore Airbnb</Title>
    </TitleWrap>
    <ScrollWrap>{explores.map(explore => <Card explore={explore} />)}</ScrollWrap>
  </Container>
);
