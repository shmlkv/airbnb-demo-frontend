import React from "react";
import styled from "styled-components";

const Link = styled.a`
  padding: 0 1rem 0 0 !important;

  &: last-child {
    padding: 0 !important;
  }
`;

const Card = styled.div`
  width: 100%;
  height: 4.5rem;
  display: inline-block;
  box-sizing: border-box;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  color: #383838;
  text-decoration: none;

  @media (max-width: 580px) {
    height: auto;
  }
`;

const CardImage = styled.img`
  width: 6rem;
  height: 100%;
  float: left;
  margin-right: 1.4rem;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  object-fit: cover;

  @media (max-width: 580px) {
    height: 5rem;
    width: 100% !important;
    padding-bottom: 0.75rem;
  }
`;

const CardTitle = styled.div`
  font-size: 17px;
  font-weight: 600;
  padding: 1.4rem;

  @media (max-width: 580px) {
    padding: 0.75rem;
  }
`;

export default ({ props }) => {
  return (
    <Link className="col-lg-4 col-sm-5 col-xs-6" href="">
      <Card>
        <CardImage src={require(`./${props.image}`)} />
        <CardTitle>{props.title}</CardTitle>
      </Card>
    </Link>
  );
};
