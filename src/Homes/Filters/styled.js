import styled from 'styled-components';
import closeButton from './close.svg';

export const Save = styled.button`
  position: fixed;
  bottom: 3.5rem;
  left: 0.5rem;
  right: 0.5rem;
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
