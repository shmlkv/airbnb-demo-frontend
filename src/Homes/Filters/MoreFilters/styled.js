import styled from 'styled-components';
import onClickOutside from 'react-onclickoutside';

export const Wrapper = styled.div`
  position: fixed;
  margin: 0 auto;
  width: 950px;
  right: 0;
  left: 0;
`;

export const Container = onClickOutside(styled.div`
  display: flex;
  background: #fff;
  color: #383838;
  padding: 1rem;
  border-radius: 3px;
  flex-wrap: nowrap;
  flex-direction: column;
`);

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

export const Rooms = styled.div``;
export const Types = styled.div``;
