import React from "react";
import styled from "styled-components";

const Settings = styled.div`
  border: 1px solid rgba(72, 72, 72, 0.2);
`;

export default ({ props }) => {
  return <Settings>{props.lang}</Settings>;
};
