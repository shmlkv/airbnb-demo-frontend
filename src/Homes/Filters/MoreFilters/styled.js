import styled from 'styled-components';
import onClickOutside from 'react-onclickoutside';

export const Wrapper = styled.div`
  position: fixed;
  margin: 0 auto;
  width: 100%;
  right: 0;
  left: 0;
  top: 50px;

  @media (min-width: 768px) {
    width: 950px;
    top: inherit;
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
  overflow: scroll;
  height: 100vh;

  @media (min-width: 768px) {
    height: calc(100vh - 8.5rem);
  }
`);

export const Title = styled.h3`
  font-weight: 400;
  margin: 0 0 1.5rem;
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
export const FilterBlock = styled.div`
  border-bottom: 1px solid rgba(72, 72, 72, 0.3);
  margin-bottom: 23px;
  padding-bottom: 23px;
`;

export const Subtitle = styled.p`
  font-size: 1.25rem;
  margin: 0;
`;

export const MoreDescription = styled.p`
  font-size: 1rem;
  margin-top: 0.2rem;
  margin-bottom: 0.5rem;
`;

export const Link = styled.a`
  text-decoration: none;
  font-weight: 100;
  color: #008489;
`;

export const MoreWrapper = styled.div`
  display: flex;
  margin-top: 1rem;
  justify-content: space-between;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: end;
`;

export const Cancel = styled.button`
  padding: 1rem;
  background: none;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  margin-bottom: 1rem;

  :hover {
    text-decoration: underline;
  }
`;

export const Apply = Cancel.extend`
  color: #fff;
  padding: 1rem;
  background-color: #008489;
`;

export const FilterWrapper = styled.div`
  max-width: 21rem;
`;
