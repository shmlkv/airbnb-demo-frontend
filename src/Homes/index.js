import React from "react";
import Helmet from "react-helmet";

import Header from "../Header";
import Filters from "./Filters";
import GoogleMap from "./GoogleMap";
import Card from "./Card";
import Pager from "./Pager";
import { ContainerFlex, HomeContainer, HomeBox, MapButton } from "../UI";

const homes = [
  {
    title: "La Salentina, see, nature & relax",
    image: "La Salentina.png",
    cost: 82,
    type: "Entrie house",
    beds: "9 beds",
    reviews: 97,
    stars: 5
  },
  {
    title: "Your private 3 bedr. riad and exclusi…",
    image: "Your private 3 bedr.png",
    cost: 82,
    type: "Entrie house",
    beds: "5 beds",
    reviews: 161,
    stars: 5
  },
  {
    title: "Dreamy Tropical Tree House",
    image: "Dreamy Tropical.png",
    cost: 200,
    type: "Entrie treehouse",
    beds: "1 bed",
    reviews: 364,
    stars: 5
  },
  {
    title: "Best location old town luxury loft",
    image: "Best location.png",
    cost: 110,
    type: "Entrie apartment",
    beds: "1 bed",
    reviews: 369,
    stars: 5
  },
  {
    title: "Lussuoso. Vista incantevole",
    image: "Lussouoso.png",
    cost: 83,
    type: "Entrie apartment",
    beds: "6 bed",
    reviews: 105,
    stars: 5
  },
  {
    title: "In the historical center of Lecce",
    image: "In the historical center of Lecce.png",
    cost: 72,
    type: "Entrie house",
    beds: "3 bed",
    reviews: 221,
    stars: 5
  }
];
export default () => {
  return (
    <HomeContainer>
      <Helmet title="AirBnb – Homes" />
      <Header placeHolder="Anywhere · Homes" />
      <Filters />
      <ContainerFlex>
        <HomeBox className="col-xs-12 col-lg-8">
          {homes.map(home => (
            <Card className="col-xs-12 col-sm-6 col-lg-6" home={home} />
          ))}
          <Pager />
        </HomeBox>
        <div className="hidden-xs hidden-sm hidden-md col-lg-4">
          <GoogleMap />
        </div>
        <MapButton className="hidden-lg hidden-xl" />
      </ContainerFlex>
    </HomeContainer>
  );
};
