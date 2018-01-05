import React from "react";
import styled from "styled-components";

import logo from "./logo.svg";

import facebook from "./social/facebook-2.svg";
import twitter from "./social/twitter-2.svg";
import instagram from "./social/instagram-2.svg";

const Bottom = styled.div`
  border-top: 1px solid rgba(72, 72, 72, 0.2);
  display: block;
  padding: 2rem 0;
  margin-top: 1.5rem;
`;

const Logo = styled.img`
  vertical-align: middle;
`;

const Copyright = styled.span`
  color: #636363;
  vertical-align: middle;
  margin-left: 0.75rem;
`;

const Links = styled.div`
  float: left;
  margin-right: 1.75rem;

  &:last-child {
    margin-right: 0;
  }
`;

const Link = styled.a`
  display: inline-block;
  margin-right: 1.75rem;
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

const Side = styled.div`
  float: right;

  @media (max-width: 480px) {
    float: left;
    margin-top: 1rem;
  }
`;

export default () => {
  return (
    <Bottom>
      <Logo src={logo} />
      <Copyright>© Airbnb Inc.</Copyright>
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
