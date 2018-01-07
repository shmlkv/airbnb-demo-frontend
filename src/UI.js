import styled from "styled-components";

import arrowmore from "./arrow-more.svg";
import arrowslider from "./arrow-slider.svg";

export const Header = styled.header`
  border-bottom: 1px solid rgba(72, 72, 72, 0.3);
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
  margin: 0;
`;

export const TitleWrap = styled.div`
  display: flex;
  margin: 4rem 0 1.5rem 0;
  align-items: center;
  justify-content: space-between;
`;

export const More = styled.a`
  text-decoration: none;
  color: #383838;
  display: flex;

  &:after {
    content: "";
    background-image: url(${arrowmore});
    width: 6px;
    height: 10px;
    display: block;
    margin: 0.4rem 0.5rem;
    float: right;
  }
`;

export const Container = styled.div`
  max-width: 966px;
  margin: 0 auto;
  padding: 0 8px;
  clear: both;
  position: relative;
`;

export const ContainerFlex = styled.div`
  max-width: 966px;
  margin: 0 auto;
  clear: both;
  display: flex;
`;

export const ScrollWrap = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  position: relative;

  &::-webkit-scrollbar {
    -webkit-appearance: none;
    display: none;
  }
`;

export const ScrollButton = styled.button`
  top: calc(50% - 20px);
  right: 0;
  height: 40px;
  width: 40px;
  background-color: #fff;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.16);
  border-radius: 20px;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 50%;
  position: absolute;

  &:after {
    background-image: url(${arrowslider});
    content: "";
    width: 6px;
    height: 10px;
    margin: 8px;
    display: block;
  }

  @media (max-width: 990px) {
    display: none;
  }
`;
