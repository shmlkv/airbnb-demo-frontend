import React from "react";

import Header from "../Header";
import Filters from "./Filters";
import Preview from "./Preview";
import GoogleMap from "./GoogleMap";
import { ContainerFlex } from "../UI";

export default () => {
  return (
    <div>
      <Header />
      <Filters />
      <ContainerFlex>
        <div className="col-xs-12 col-lg-8">
          <Preview />
        </div>
        <div className="col-lg-4">
          <GoogleMap />
        </div>
      </ContainerFlex>
    </div>
  );
};
