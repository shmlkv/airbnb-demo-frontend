import React from "react";
import styled from "styled-components";

const Menu = styled.nav`
  margin-top: 1rem;

  @media (max-width: 968px) {
    display: none;
  }
`;

const MenuItem = styled.div`
  display: inline-block;
  margin: 1rem 0 1rem 0.5rem;
`;

const Link = styled.a`
  padding: 0.5rem;
  color: #383838;
  font-size: 14px;
  text-decoration: none;
`;

const links = ["Become a host", "Help", "Sign up", "Log in"];

export default () => {
  return (
    <Menu>
      {links.map(link => (
        <MenuItem>
          <Link href="">{link}</Link>
        </MenuItem>
      ))}
    </Menu>
  );
};
