import React from "react";
import styled from "styled-components";

const Menu = styled.ul`
  float: right;
`;
const Item = styled.li`
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
        <Item>
          <Link href="">{link}</Link>
        </Item>
      ))}
    </Menu>
  );
};