import React from "react";
import styled from "styled-components";

import Dates from "./Buttons/Dates";
import Guests from "./Buttons/Guests";
import Type from "./Buttons/Type";
import Price from "./Buttons/Price";
import Instant from "./Buttons/Instant";
import MoreFilters from "./Buttons/MoreFilters";

const Box = styled.div`
  border-bottom: 1px solid rgba(72, 72, 72, 0.3);
`;

const Container = styled.div`
  max-width: 966px;
  margin: 0 auto;
  clear: both;
  display: flex;
`;

export default () => {
  return (
    <Box>
      <Container>
        <Dates />
        <Guests />
        <Type />
        <Price />
        <Instant />
        <MoreFilters />
      </Container>
    </Box>
  );
};
