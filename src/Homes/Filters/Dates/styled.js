import styled from 'styled-components';
import onClickOutside from 'react-onclickoutside';

export const DropdownHolder = styled.div`
  position: relative;
`;

export const DropdownWindow = onClickOutside(styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border: 1px solid #d5d5d5;
  border-radius: 3px;
  z-index: 1;
`);

export const DateHeader = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 100px;
  background: #fff;
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

export const SelectDate = styled.span`
  font-size: 18px;
  color: ${props => (props.isSelected ? '#0F7276' : '#000')};
  padding-bottom: 2px;
  border-bottom: 1px solid ${props => (props.isSelected ? '#0F7276' : '#fff')};
`;

export const SelectArrow = styled.img`
  height: 10px;
  margin: 0 1rem;
`;
