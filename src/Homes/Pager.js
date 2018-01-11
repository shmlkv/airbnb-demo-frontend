import React from "react";

import styled from "styled-components";
import arrowNext from "./arrow-right.svg";

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
const Pager = styled.div`
  display: flex;
  justify-content: center;
`;
const Next = styled(Page)`
  background: url(${arrowNext});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  border: 1px solid #0f7276;
`;
export default () => (
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
);
