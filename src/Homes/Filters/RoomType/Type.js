import React from 'react';
import styled from 'styled-components';
import check from 'check.svg';

const Container = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1.5rem 1rem 1rem;
  cursor: pointer;
  color: #383838;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
`;

const Checkbox = styled.input.attrs({
  type: 'checkbox',
})`
  width: 1.5rem;
  flex-shrink: 0;
  height: 1.5rem;
  appearance: none;
  border: 1px solid rgba(72, 72, 72, 0.3);
  margin-right: 0.5rem;
  cursor: pointer;
  background: url(${checkbox}) no-repeat center center;
  background-size: 0.875rem 0.625rem;
  border-radius: 4px;

  &:checked {
    background-color: #008489;
  }
`;

const Title = styled.p`
  font-weight: 100;
  margin: 0 0 0.5rem;
`;

const Description = styled.p`
  font-weight: 100;
  font-size: 0.875rem;
  margin: 0;
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
