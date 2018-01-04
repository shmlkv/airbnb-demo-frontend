import React from "react";
import styled from "styled-components";

import { Container, ContainerFlex } from "./../styled";
import downArrow from "./downArrow.svg";

import Bottom from "./Bottom";

const Footer = styled.footer`
    border-top: 1px solid rgba(72, 72, 72, 0.3);
    margin-top: 6rem;
    padding-top: 3rem;
  `,
  Language = styled.div`
    padding: 0.75rem;
    border: 1px solid rgba(72, 72, 72, 0.2);
    border-radius: 4px;
    margin-bottom: 1rem;
    position: relative;
    &:after {
      content: "";
      background: url(${downArrow});
      position: absolute;
      width: 1rem;
      height: 0.5rem;
      right: 0.5rem;
      top: 1.1rem;
    }
  `,
  Title = styled.div`
    padding-bottom: 1.12rem;
    font-weight: bold;
    display: block;
    color: #383838;
  `,
  Link = styled.a`
    display: block;
    padding-bottom: 0.7rem;
    text-decoration: none;
    color: #636363;
  `;

export default () => {
  return (
    <Footer>
      <ContainerFlex>
        <div className="col-lg-3 col-sm-3 col-xs-12">
          <Language>English</Language>
          <Language>United States dollar</Language>
        </div>
        <div className="col-lg-2 col-lg-offset-1 col-md-2 col-md-offset-1 hidden-sm hidden-xs">
          <Title>Airbnb</Title>
          <Link href="">About us</Link>
          <Link href="">Careers</Link>
          <Link href="">Press</Link>
          <Link href="">Policies</Link>
          <Link href="">Help</Link>
          <Link href="">Diversity & Belongi</Link>
        </div>
        <div className="col-lg-2 col-lg-offset-1 col-md-2 col-md-offset-1 hidden-sm hidden-xs">
          <Title>Discover</Title>
          <Link href="">Trust & Safety</Link>
          <Link href="">Travel Credit</Link>
          <Link href="">Gift Cards</Link>
          <Link href="">Airbnb Citizen</Link>
          <Link href="">Business Travel</Link>
          <Link href="">Guidebooks</Link>
          <Link href="">Airbnbmag</Link>
        </div>
        <div className="col-lg-2 col-lg-offset-1 col-md-2 col-md-offset-1 hidden-sm hidden-xs">
          <Title>Hosting</Title>
          <Link href="">Why Host</Link>
          <Link href="">Hospitality</Link>
          <Link href="">Pesponsible Hosting</Link>
          <Link href="">Community Center</Link>
        </div>
      </ContainerFlex>
      <Container>
        <Bottom />
      </Container>
    </Footer>
  );
};
