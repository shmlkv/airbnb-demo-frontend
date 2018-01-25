import styled from 'styled-components';

export const CardContainer = styled.div`
  padding: 0;
`;

export const Card = styled.a`
  margin-right: 1rem;
  text-decoration: none;
  color: #383838;
  display: flex;
  flex-direction: column;
  padding: 0;
`;

export const Image = styled.img`
  max-width: 100%;
`;

export const Title = styled.h4`
  font-size: 15px;
  margin: 0.5rem 0 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-weight: bold;
`;

export const Rating = styled.div`
  margin-right: 0.4rem;
  display: flex;
`;

export const Star = styled.img`
  margin-right: 0.25rem;
  float: left;
  margin-top: 0.25rem;
`;

export const InlinePrice = styled.span`
  font-weight: 600;
  margin-right: 0.4rem;
`;

export const Reviews = styled.div`
  margin-left: 0.4rem;
  font-size: 12px;
  margin-top: 0.25rem;
`;
