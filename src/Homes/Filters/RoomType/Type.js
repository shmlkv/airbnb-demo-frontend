import React from 'react';
import styled from 'styled-components';
import check from './check.svg';

const Container = styled.label`
  background: #fff;
  color: #383838;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1.5rem 1rem 1rem;
  cursor: pointer;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
`;

const Checkbox = styled.input.attrs({
  type: 'checkbox',
})`
  flex-shrink: 0;
  border: 1px solid rgba(72, 72, 72, 0.3);
  width: 1.5rem;
  border-radius: 4px;
  height: 1.5rem;
  margin-right: 0.5rem;
  cursor: pointer;
  appearance: none;
  background: url(${check}) no-repeat center center;
  background-size: 0.875rem 0.625rem;

  &:checked {
    background-color: #008489;
  }
`;

const Title = styled.p`
  margin: 0 0 0.5rem;
  font-family: 'CircularAir Normal';

`;

const Description = styled.p`
  margin: 0;
  font-size: 0.875rem;
  font-weight: 100;
`;

const Icon = styled.img`
  margin-left: 1rem;
`;

export default ({
  title, description, icon, checked, onChange, name,
}) => (
  <Container>
    <Content>
      <Checkbox checked={checked} onChange={onChange} name={name} />
      <div>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </div>
    </Content>
    <Icon src={icon} alt="Icon" />
  </Container>
);
