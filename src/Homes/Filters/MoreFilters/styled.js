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
