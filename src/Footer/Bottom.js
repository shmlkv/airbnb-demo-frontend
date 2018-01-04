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
  `,
  Logo = styled.img`
    vertical-align: middle;
  `,
  Copyright = styled.span`
    color: #636363;
    vertical-align: middle;
    margin-left: 0.75rem;
  `,
  Links = styled.div`
    float: left;
  `,
  Link = styled.a`
    display: inline-block;
    margin-right: 1rem;
    color: #636363;
  `,
  SocialIcon = styled.img`
    height: 1.5rem;
    width: 1.5rem;
  `,
  Side = styled.div`
    float: right;
    @media (max-width: 480px) {
      float: none;
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
          <Link>Terms</Link>
          <Link>Privacy</Link>
          <Link>Site map</Link>
        </Links>
        <Links>
          <Link>
            <SocialIcon src={facebook} />
          </Link>
          <Link>
            <SocialIcon src={twitter} />
          </Link>
          <Link>
            <SocialIcon src={instagram} />
          </Link>
        </Links>
      </Side>
    </Bottom>
  );
};
