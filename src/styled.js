import styled from "styled-components";

import arrowmore from "./arrow-more.svg";

export const Title = styled.h1`
    margin: 4rem 0 1.5rem 0;
    font-size: 32px;
    font-weight: 600;
    display: inline-block;
  `,
  More = styled.a`
    float: right;
    position: absolute;
    top: 4.5rem;
    right: 1rem;
    text-decoration: none;
    color: #383838;
    &:after {
      content: "";
      background-image: url(${arrowmore});
      width: 6px;
      height: 10px;
      display: block;
      margin: 0.4rem 0.5rem;
      float: right;
    }
  `,
  Container = styled.div`
    max-width: 966px;
    margin: 0 auto;
    clear: both;
  `,
  Header = styled.div`
    display: block;
    position: relative;
  `,
  ScrollWrap = styled.div`
    display: block;
    overflow-y: auto;
  `,
  CardContainer = styled.div`
    float: left;
  `;
