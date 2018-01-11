import React from "react";

import styled from "styled-components";
import arrowNext from "./arrow-right.svg";

const Box = styled.div`
  margin: 3rem auto;
  flex-direction: column;
  display: flex;
`;
const Pager = styled.div`
  display: flex;
  justify-content: center;
`;
const Page = styled.button`
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-left: 8px;
  margin-right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0f7276;
  -fx-faint-focus-color: transparent;

  &:focus {
    outline: none;
  }
`;

const Current = styled(Page)`
  background: #0f7276;
  color: white;
`;

const Next = styled(Page)`
  background: url(${arrowNext});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  border: 1px solid #0f7276;
`;

const Description = styled.span`
  font-size: 16px;
  margin-top: 1rem;
  text-align: center;
`;

const Warning = styled.span`
  font-size: 16px;
  margin-top: 2.5rem;
  text-align: center;
`;
export default () => (
  <Box>
    <Pager>
      <Current active href="/homes">
        1
      </Current>
      <Page>2</Page>
      <Page>3</Page>
      <Page>…</Page>
      <Page>17</Page>
      <Next />
    </Pager>
    <Description>1 – 18 of 300+ Rentals</Description>
    <Warning>
      Enter dates to see full pricing. Additional fees apply. Taxes may be
      added.
    </Warning>
  </Box>
);
