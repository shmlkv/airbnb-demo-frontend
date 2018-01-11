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

export default () => (
  <GoogleMapContainer>
    <GoogleMap
      apiKey={process.env.REACT_APP_GOOGLE_MAPS_KEY}
      defaultZoom={8}
      center={{ lat: 32.091958, lng: 34.788203 }}
    />
  </GoogleMapContainer>
);