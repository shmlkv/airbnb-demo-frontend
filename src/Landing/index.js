import React from "react";

import Explore from "../Explore";
import Experiences from "../Experiences";
import Homes from "../Homes";
import Popular from "../Popular";
import Featured from "../Featured";
import Footer from "../Footer";

export default () => {
  return (
    <div>
      <Explore />
      <Experiences />
      <Homes />
      <Popular />
      <Featured />
      <Footer />
    </div>
  );
};
