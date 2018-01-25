import styled from 'styled-components';

import arrowmore from './arrow-more.svg';
import arrowslider from './arrow-slider.svg';
import location from './location.svg';

export const MainContainer = styled.div`
  margin-top: 6.5rem;
`;

export const HomeContainer = styled.div`
  margin-top: 9.5rem;
`;

export const Header = styled.header`
  border-bottom: 0.5px solid rgba(72, 72, 72, 0.3);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background: white;
  z-index: 1;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
  margin: 0;
`;

export const TitleWrap = styled.div`
  display: flex;
  margin: 3rem 0 1.5rem 0;
  align-items: center;
  justify-content: space-between;
`;

export const More = styled.a`
  text-decoration: none;
  color: #383838;
  display: flex;

  &:after {
    content: '';
    background-image: url(${arrowmore});
    width: 6px;
    height: 10px;
    display: block;
    margin: 0.3rem 0.5rem;
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
    content: '';
    width: 6px;
    height: 10px;
    margin: 8px;
    display: block;
  }

  @media (max-width: 990px) {
    display: none;
  }
`;

export const HomeBox = styled.div`
  display: flex;
  flex-flow: wrap;
  padding: 0;
`;

export const FilterButton = styled.button`
  position: relative;
  padding: 0.5rem 1rem;
  color: #383838;
  margin: 0.75rem 0.75rem 0.75rem 0;
  transition: background-color 0.2s ease-out;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  font-family: 'CircularAir Normal';
  background: ${props => (props.isSelected ? '#008489' : '#fff')};
  border: 1px solid ${props => (props.isSelected ? '#008489' : ' rgba(72, 72, 72, 0.2);')};
  color: ${props => (props.isSelected ? '#fff' : '#383838')};
`;

export const Fade = styled.div`
  position: fixed;
  z-index: -1;
  top: 8rem;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.5);
`;

export const MapButton = styled.button`
  position: fixed;
  bottom: 1.5rem;
  right: 0.5rem;
  width: 2.5rem;
  height: 2.5rem;
  background: #fff;
  border-radius: 50%;

  &:after {
    content: '';
    background: url(${location});
    width: 1rem;
    height: 1.3rem;
    background-size: cover;
    display: block;
    margin: 0 auto;
  }
`;
