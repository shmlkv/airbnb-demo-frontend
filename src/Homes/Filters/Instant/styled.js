import styled from 'styled-components';
import onClickOutside from 'react-onclickoutside';

export const ContainerPick = onClickOutside(styled.div`
  position: absolute;
  background: #fff;
  color: #383838;
  border: 1px solid #d5d5d5;
  border-radius: 3px;
  width: 18em;
  padding: 1rem;
`);

export const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

export const Title = styled.h3`
  margin: 0;
  font-weight: 400;
  font-family: 'CircularAir Normal';
`;

export const Description = styled.p`
  font-weight: 100;
  font-size: 0.95rem;
  margin-right: 1rem;
`;

export const Switcher = styled.button`
  width: 4rem;
  height: 2.5rem;
  padding: 0;
  margin-right: 1rem;
  background: ${props => (props.active ? '#008489' : 'rgba(72, 72, 72, 0.08)')};
  border: 1px solid ${props => (props.active ? '#008489' : ' rgba(72, 72, 72, 0.3)')};
  border-radius: 24px;
  appearance: none;
  cursor: pointer;
  flex-shrink: 0;
`;

export const Tumbler = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background: white;
  top: -1px;
  left: ${props => (props.active ? '23px' : '-1px')};
  border: 1px solid ${props => (props.active ? '#008489' : 'rgba(72, 72, 72, 0.3)')};
  border-radius: 24px;
  transition: left 0.2s ease-in-out;
  position: relative;
`;

export const Icon = styled.img`
  position: relative;
  top: 12px;
`;
