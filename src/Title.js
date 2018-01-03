import React from "react";
import styled from "styled-components";

const Title = styled.div`
  font-size: 17px;
  font-weight: 600;
  padding-left: 1.5rem;
`;

export default title => {
  return <Title>{title}</Title>;
};
