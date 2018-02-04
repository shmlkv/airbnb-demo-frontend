import React from 'react';
import Helmet from 'react-helmet';

import { MainContainer } from '../UI';
import Header from '../Header';
import Explore from './Explore';
import Experiences from './Experiences';
import Homes from './Homes';
import Popular from './Popular';
import Featured from './Featured';
import Footer from './Footer';

export default () => (
  <MainContainer>
    <Helmet title="AirBnb" />
    <Header placeHolder="Try “Miami”" />
    <Explore />
    <Experiences />
    <Homes />
    <Popular />
    <Featured />
    <Footer />
  </MainContainer>
);
