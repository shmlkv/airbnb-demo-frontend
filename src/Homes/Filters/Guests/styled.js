import styled from 'styled-components';
import onClickOutside from 'react-onclickoutside';

export const ContainerPick = onClickOutside(styled.div`
  position: absolute;
  background: #fff;
  color: #383838;
  border: 1px solid #d5d5d5;
  border-radius: 3px;
  ${''};
`);

export const DropDownWindow = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 1rem 2rem 1.5rem;
`;

export const Title = styled.p`
  margin: 0 0 0.5rem;
`;

export const Description = styled.p`
  margin: 0;
  font-weight: 100;
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
