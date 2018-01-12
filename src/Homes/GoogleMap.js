import React from "react";
import styled from "styled-components";
import GoogleMap from "google-map-react";

const GoogleMapContainer = styled.div`
  background: lightgrey;
  position: fixed;
  width: calc( (100vw - 966px)/2 + (330px - 16px));
  right: 0;
  bottom: 0;
  top: 140px;
`;

const Place = styled.div`
  position: absolute;
  border: 10px solid #fabf3f;
  border-radius: 50%;
  backgroundcolor: white;
  textalign: center;
`;
export default () => (
  <GoogleMapContainer>
    <GoogleMap
      apiKey="AIzaSyDEEl36KlPhaJM-TRbX8io-xdjAZm4twtg"
      defaultZoom={8}
      center={{ lat: 32.091958, lng: 34.788203 }}
    >
      <Place lat={32.091958} lng={34.788203} />
      <Place lat={32.011923} lng={34.718234} />
    </GoogleMap>
  </GoogleMapContainer>
);
