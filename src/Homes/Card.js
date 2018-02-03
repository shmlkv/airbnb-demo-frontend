import React from 'react';
import styled from 'styled-components';
import times from 'lodash/times';
import Pluralize from 'react-pluralize';

import { Card, Title, Image, Star, InlinePrice, Rating, Reviews } from '../UI/Card';

import star from './star.svg';

const HomeCard = styled(Card)`
  padding: 0 0.5rem 2.5rem 0.5rem;
  margin: 0;
`;

const Superhost = styled.div`
  margin-left: 0.4rem;
  font-size: 12px;
  margin-top: 0.25rem;
`;

const Description = styled.span`
  margin-top: 0.25rem;
`;

export default ({ home, className }) => (
  <HomeCard className={className} href="">
    <Image src={home.image} />
    <Title>
      <InlinePrice>${home.price}</InlinePrice>
      {home.title}
    </Title>
    <Description>
      {home.kind} · <Pluralize singular="bed" count={home.beds} />
    </Description>
    <Rating>
      {times(home.rating, () => <Star src={star} alt="" />)}
      <Reviews>{home.reviews} reviews</Reviews>
      {home.isSuperhost && <Superhost> · Superhost</Superhost>}
    </Rating>
  </HomeCard>
);
