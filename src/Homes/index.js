import React from "react";

import Header from "../Header";
import Filters from "./Filters";
import GoogleMap from "./GoogleMap";
import Card from "./Card";
import Pager from "./Pager";
import { ContainerFlex, HomeContainer, Flex } from "../UI";

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
    title: "Dreamy Tropical Tree House",
    image: "Dreamy Tropical.png",
    cost: 200,
    type: "Entrie treehouse",
    beds: "1 bed",
    reviews: 364,
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
    title: "Dreamy Tropical Tree House",
    image: "Dreamy Tropical.png",
    cost: 200,
    type: "Entrie treehouse",
    beds: "1 bed",
    reviews: 364,
    stars: 5
  }
];
export default () => {
  return (
    <HomeContainer>
      <Header searchPlaceHolder="Anywhere · Homes" />
      <Filters />
      <ContainerFlex>
        <Flex className="col-xs-12 col-lg-8">
          {homes.map(home => (
            <Card className="col-lg-6 col-xs-12 col-sm-6" home={home} />
          ))}
        </Flex>
        <div className="col-lg-4 hidden-xs hidden-md hidden-sm">
          <GoogleMap />
        </div>
      </ContainerFlex>
      <Pager />
      <div>1 – 18 of 300+ Rentals</div>
      <div>
        Enter dates to see full pricing. Additional fees apply. Taxes may be
        added.
      </div>
    </HomeContainer>
  );
};
