import React from 'react';
import Helmet from 'react-helmet';

import Header from '../Header';
import Filters from './Filters';
import GoogleMap from './GoogleMap';
import Card from './Card';
import Pager from './Pager';
import { ContainerFlex, HomeContainer, HomeBox, MapButton } from '../UI';

import img1 from './La Salentina.png';
import img2 from './Your private 3 bedr.png';
import img3 from './Dreamy Tropical.png';
import img4 from './Best location.png';
import img5 from './Lussouoso.png';
import img6 from './In the historical center of Lecce.png';

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
  {
    title: 'Best location old town luxury loft',
    image: img4,
    cost: 110,
    type: 'Entrie apartment',
    beds: '1 bed',
    reviews: 369,
    stars: 5,
  },
  {
    title: 'Lussuoso. Vista incantevole',
    image: img5,
    cost: 83,
    type: 'Entrie apartment',
    beds: '6 bed',
    reviews: 105,
    stars: 5,
  },
  {
    title: 'In the historical center of Lecce',
    image: img6,
    cost: 72,
    type: 'Entrie house',
    beds: '3 bed',
    reviews: 221,
    stars: 5,
  },
];
export default () => (
  <HomeContainer>
    <Helmet title="AirBnb – Homes" />
    <Header placeHolder="Anywhere · Homes" />
    <Filters />
    <ContainerFlex>
      <HomeBox className="col-xs-12 col-lg-8">
        {homes.map(home => <Card className="col-xs-12 col-sm-6 col-lg-6" home={home} />)}
        <Pager />
      </HomeBox>
      <div className="hidden-xs hidden-sm hidden-md col-lg-4">
        <GoogleMap />
      </div>
      <MapButton className="hidden-lg hidden-xl" />
    </ContainerFlex>
  </HomeContainer>
);
