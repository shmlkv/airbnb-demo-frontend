import React from "react";

import Header from "../Header";
import Explore from "./Explore";
import Experiences from "./Experiences";
import Homes from "./Homes";
import Popular from "./Popular";
import Featured from "./Featured";
import Footer from "./Footer";

export default () => {
  return (
    <div>
      <Header />
      <Explore />
      <Experiences />
      <Homes />
      <Popular />
      <Featured />
      <Footer />
    </div>
  );
};
