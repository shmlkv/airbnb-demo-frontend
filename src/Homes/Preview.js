import React from "react";

import Card from "./Card";
import { ContainerFlex } from "../UI";

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
  }
];
export default () => {
  return (
    <div>
      {homes.map(home => <Card className="col-xs-12 col-sm-6" home={home} />)}
    </div>
  );
};
