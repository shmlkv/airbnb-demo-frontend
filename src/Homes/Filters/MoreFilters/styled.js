import styled from 'styled-components';
import onClickOutside from 'react-onclickoutside';

export const Wrapper = styled.div`
  position: fixed;
  margin: 0 auto;
  width: 100%;

  right: 0;
  left: 0;
  overflow-y: scroll;
  height: 95%;
  @media (min-width: 768px) {
    width: 950px;
  }
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
export const Average = styled.p`
  font-size: 12px;
`;
export const Range = styled.p`
  font-size: 18px;
`;

export const PriceMapping = styled.img`
  margin-left: 37px;
  margin-bottom: -16px;
  margin-top: 20px;
`;
export const Types = styled.div`
  border-bottom: 1px solid rgba(72, 72, 72, 0.3);
  margin-bottom: 23px;
  padding-bottom: 23px;
`;
export const Price = styled.div`
  border-bottom: 1px solid rgba(72, 72, 72, 0.3);
  margin-bottom: 23px;
  padding-bottom: 23px;
`;
export const Rooms = styled.div`
  border-bottom: 1px solid rgba(72, 72, 72, 0.3);
  margin-bottom: 23px;
  padding-bottom: 23px;
`;
