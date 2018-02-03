import React from 'react';
import styled from 'styled-components';
import GoogleMap from 'google-map-react';

const GoogleMapContainer = styled.div`
  background: lightgrey;
  position: fixed;
  width: calc( (100vw - 966px)/2 + (330px - 16px));
  right: 0;
  bottom: 0;
  top: 138.5px;
`;

const Place = styled.div`
  position: absolute;
  width: 1.5rem;
  background: #fabf3f;
  box-shadow: 0px 7px 13px 0px rgba(50, 50, 50, 0.75);
  border-radius: 50%;
  text-align: center;
  height: 1.5rem;

  &:after {
    content: '★';
    color: #ed549c;
    font-size: 1.2rem;
  }
`;

export default () => (
  <GoogleMapContainer>
    <GoogleMap
      apiKey={process.env.REACT_APP_GOOGLE_MAPS_KEY}
      defaultZoom={8}
      center={{ lat: 32.091958, lng: 34.788203 }}
    >
      <Place lat={32.091958} lng={34.788203} />
      <Place lat={32.011923} lng={34.718234} />
    </GoogleMap>
  </GoogleMapContainer>
);
