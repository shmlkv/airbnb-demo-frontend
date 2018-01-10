import React from "react";

import Header from "../Header";
import Filters from "./Filters";
import Preview from "./Preview";
import { Container } from "../UI";

export default () => {
  return (
    <div>
      <Header />
      <Filters />
      <Container>
        <Preview />
      </Container>
    </div>
  );
};
