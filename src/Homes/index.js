import React from 'react';
import Helmet from 'react-helmet';
import GoogleMap from 'google-map-react';

import Header from '../Header';
import Filters from './Filters';
import Card from './Card';
import Pager from './Pager';
import { ContainerFlex, HomeContainer, HomeBox, MapButton, GoogleMapContainer, Place } from '../UI';

import retrieveData from './api';

export default class Homes extends React.Component {
  state = {
    homes: null,
  };

  async componentWillMount() {
    const homes = await retrieveData(0, 6);
    this.setState({ homes });
  }

  render() {
    return (
      <HomeContainer>
        <Helmet title="AirBnb – Homes" />
        <Header placeHolder="Anywhere · Homes" />
        <Filters />
        <ContainerFlex>
          <HomeBox className="col-xs-12 col-lg-8">
            {this.state.homes &&
              this.state.homes.map(home => (
                <Card className="col-xs-12 col-sm-6 col-lg-6" home={home} />
              ))}
            <Pager />
          </HomeBox>
          <div className="hidden-xs hidden-sm hidden-md col-lg-4">
            <GoogleMapContainer>
              <GoogleMap
                apiKey={process.env.REACT_APP_GOOGLE_MAPS_KEY}
                defaultZoom={3}
                center={{ lat: 32.091958, lng: 34.788203 }}
              >
                {this.state.homes &&
                  this.state.homes.map(home => <Place lat={home.lat} lng={home.lng} />)}
              </GoogleMap>
            </GoogleMapContainer>
          </div>
          <MapButton className="hidden-lg hidden-xl" />
        </ContainerFlex>
      </HomeContainer>
    );
  }
}
