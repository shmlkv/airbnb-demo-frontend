import React from "react";
import styled from "styled-components";

import logo from "./logo.svg";

import facebook from "./social/facebook.svg";
import twitter from "./social/twitter.svg";
import instagram from "./social/instagram.svg";

const Bottom = styled.div`
  border-top: 1px solid rgba(72, 72, 72, 0.2);
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
  margin-top: 1.5rem;
  @media (max-width: 580px) {
    display: block;
  }
`;

const Logo = styled.img`
  margin-right: 0.5rem;
`;

const Copyright = styled.span`
  color: #636363;
  display: flex;
  align-items: center;
  margin-left: 0.75rem;
`;

const Side = styled.div`
  display: flex;

  @media (max-width: 580px) {
    margin: 1rem 0.75rem;
  }
`;

const Links = styled.div`
  margin-right: 1.75rem;
  display: flex;

  &:last-child {
    margin-right: 0;
  }
`;

const Link = styled.a`
  margin-right: 1.25rem;
  color: #636363;
  text-decoration: none;

  &:last-child {
    margin-right: 0;
  }
`;

const SocialIcon = styled.img`
  height: 1.5rem;
  width: 1.5rem;
`;

export default () => {
  return (
    <Bottom>
      <Copyright>
        <Logo src={logo} />
        © Airbnb Inc.
      </Copyright>
      <Side>
        <Links>
          <Link href="#">Terms</Link>
          <Link href="#">Privacy</Link>
          <Link href="#">Site map</Link>
        </Links>
        <Links>
          <Link href="#">
            <SocialIcon src={facebook} />
          </Link>
          <Link href="#">
            <SocialIcon src={twitter} />
          </Link>
          <Link href="#">
            <SocialIcon src={instagram} />
          </Link>
        </Links>
      </Side>
    </Bottom>
  );
};
