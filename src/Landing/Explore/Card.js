import React from "react";
import styled from "styled-components";

const Link = styled.a`
  text-decoration: none;
  &:last-child {
    padding: 0 !important;
  }
`;

const Card = styled.div`
  display: flex;
  width: 100%;
  height: 4.5rem;
  color: #383838;
  box-sizing: border-box;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;

  @media (max-width: 580px) {
    height: auto;
    flex-direction: column;
  }
`;

const Image = styled.img`
  width: 6rem;
  height: 100%;
  margin-right: 1.4rem;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  object-fit: cover;

  @media (max-width: 580px) {
    height: 5rem;
    width: 100% !important;
  }
`;

const Title = styled.h4`
  font-size: 17px;
  font-weight: 600;

  @media (max-width: 580px) {
    margin: 0.75rem;
  }
`;

export default ({ explore }) => {
  return (
    <Link className="col-lg-4 col-sm-5 col-xs-6" href={explore.link}>
      <Card>
        <Image src={require(`./${explore.image}`)} />
        <Title>{explore.title}</Title>
      </Card>
    </Link>
  );
};
