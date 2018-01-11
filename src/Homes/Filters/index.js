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
  position: fixed;
  top: 81px;
  right: 0;
  left: 0;
  background: white;
  z-index: 1;
`;

const Container = styled.div`
  max-width: 966px;
  margin: 0 auto;
  clear: both;
  display: flex;
  box-sizing: border-box;
  padding-left: 0.5rem;
`;

export const Filter = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid rgba(72, 72, 72, 0.2);
  color: #383838;
  margin: 0.75rem 0.75rem 0.75rem 0;
  border-radius: 4px;
  font-size: 14px;
  -fx-faint-focus-color: transparent;
`;

export default () => {
  return (
    <Box>
      <Container>
        <Dates />
        <Guests />
        <Type className="hidden-xs hidden-md hidden-sm" />
        <Price className="hidden-xs hidden-md hidden-sm" />
        <Instant className="hidden-xs hidden-md hidden-sm" />
        <MoreFilters />
      </Container>
    </Box>
  );
};
