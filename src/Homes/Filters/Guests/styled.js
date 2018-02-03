import styled from 'styled-components';
import onClickOutside from 'react-onclickoutside';

export const ContainerPick = onClickOutside(styled.div`
  position: fixed;
  top: 48px;
  right: 0;
  bottom: 0;
  left: 0;
  background: #fff;
  color: #383838;
  border: 1px solid #d5d5d5;
  border-radius: 3px;
  z-index: 1;

  @media (min-width: 575px) {
    position: absolute;
    top: initial;
    right: initial;
    bottom: initial;
    left: initial;
  }
`);

export const DropDownWindow = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0 2rem;
  z-index: 1;
`;

export const Title = styled.p`
  margin: 0 0 0.5rem;
  font-size: 20px;
  font-family: 'CircularAir Normal';
`;

export const Description = styled.p`
  margin: 0;
  font-weight: 100;
  font-size: 16px;
`;

export const Button = styled.button`
  width: 2em;
  height: 2em;
  margin-right: 1rem;
  margin-left: 1rem;
  color: #008489;
  border: 1px solid #008489;
  border-radius: 50%;
  background: none;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
  }
`;

export const Value = styled.span`
  width: 1rem;
  text-align: center;
`;

export const Selectors = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const PickerWrapper = styled.div`
  margin-left: 1rem;
`;
