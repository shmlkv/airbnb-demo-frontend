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
    padding: 0.5em;
  `,
  ContainerFlex = styled.div`
    max-width: 966px;
    margin: 0 auto;
    clear: both;
    display: flex;
  `,
  Header = styled.div`
    display: block;
    position: relative;
  `,
  ScrollWrap = styled.div`
    display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  &::-webkit-scrollbar {
    -webkit-appearance: none;
    display: none;
  `;
