import React from 'react';

import Card from './Card';
import { Title, Container, TitleWrap, ScrollWrap } from '../../UI';

import homesImage from './Homes.png';
import experiencesImage from './Experiences.png';
import restaurantsImage from './Restaurants.png';

const explores = [
  { title: 'Homes', image: homesImage },
  { title: 'Experiences', image: experiencesImage },
  { title: 'Restaurants', image: restaurantsImage },
];

export default () => (
  <Container>
    <TitleWrap>
      <Title>Explore Airbnb</Title>
    </TitleWrap>
    <ScrollWrap>{explores.map(explore => <Card explore={explore} />)}</ScrollWrap>
  </Container>
);
