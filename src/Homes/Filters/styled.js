import styled from 'styled-components';
import closeButton from './close.svg';

export const Save = styled.button`
  width: calc(100% - 1rem);
  color: #fff;
  background: #ff5a5f;
  border-radius: 4px;
  height: 3rem;
  cursor: pointer;

  @media (min-width: 575px) {
    display: none;
  }
`;
export const SaveWrapper = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0.5rem;
  border-top: 0.5px #d5d5d5 solid;
  background: #fff;
  z-index: 2;
`;

export const Actions = styled.div`
  display: flex;
  background: #fff;
`;

export const Cancel = styled.button`
  color: #636363;
  padding: 16px;
  font-size: 16px;
  background: #fff;
  cursor: pointer;
  border: none;
`;

export const Apply = styled.button`
  color: #0f7276;
  margin-left: auto;
  padding: 16px;
  font-size: 16px;
  background: #fff;
  cursor: pointer;
  border: none;
`;

export const Close = styled.button`
  position: absolute;
  background: url(${closeButton});
  left: 0.5rem;
  top: 1rem;
  width: 1rem;
  height: 1rem;
  background-size: cover;
  border: none;
  cursor: pointer;

  @media (min-width: 575px) {
    display: none;
  }
`;

export const MobileHeader = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background: #fff;
  border-bottom: 1px solid rgba(72, 72, 72, 0.3);
  text-align: center;
  padding: 1rem 0.5rem;

  @media (min-width: 575px) {
    display: none;
  }
`;

export const Reset = styled.button`
  position: absolute;
  right: 0.5rem;
  top: 1rem;
  color: #0f7276;
  border: none;
  cursor: pointer;
  background: none;

  @media (min-width: 575px) {
    display: none;
  }
`;

export const Dates = styled.p`
  text-align: left;
  margin-top: 2rem;

  @media (min-width: 575px) {
    display: none;
  }
`;
