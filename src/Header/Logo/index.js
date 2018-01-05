import React from "react";
import styled from "styled-components";
import logo from "./logo.svg";

import menudropdown from "./menu-dropdown.svg";
const Link = styled.a`
  position: relative;
`;

const Logo = styled.img`
  margin: 1.5rem 0;
  float: left;
`;

const DropDown = styled.div`
  width: 1rem;
  height: 0.5rem;
  float: left;
  margin: 1.5rem 0;
  position: absolute;
  background: url(${menudropdown});
  right: -1rem;
  top: 0.75rem;
  @media (min-width: 968px) {
    display: none;
  }
`;

export default () => {
  return (
    <Link href="#">
      <Logo src={logo} alt="logo" />
      <DropDown className="hidden-lg" />
    </Link>
  );
};
