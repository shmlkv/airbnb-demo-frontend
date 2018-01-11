import React from "react";

import { MainContainer } from "../UI";
import Header from "../Header";
import Explore from "./Explore";
import Experiences from "./Experiences";
import Homes from "./Homes";
import Popular from "./Popular";
import Featured from "./Featured";
import Footer from "./Footer";

export default () => {
  return (
    <MainContainer>
      <Header searchPlaceHolder="Try “Miami”" />
      <Explore />
      <Experiences />
      <Homes />
      <Popular />
      <Featured />
      <Footer />
    </MainContainer>
  );
};
