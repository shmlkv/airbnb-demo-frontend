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
