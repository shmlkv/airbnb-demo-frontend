import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

import logo from "./logo.svg";
import arrow from "./arrow.svg";

const InternalLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-top: 1.5rem;

  &:after {
    content: "";
    width: 1rem;
    height: 0.5rem;
    background: url(${arrow});
    background-size: cover;

    @media (min-width: 968px) {
      display: none;
    }
  }
`;

const Logo = styled.img``;

export default () => {
  return (
    <InternalLink to="/">
      <Logo src={logo} alt="logo" />
    </InternalLink>
  );
};
