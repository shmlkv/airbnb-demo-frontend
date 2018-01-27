import React from 'react';
import styled from 'styled-components';
import onClickOutside from 'react-onclickoutside';

import { FilterButton, Fade } from '../../../UI';
import { Actions, Cancel, Apply } from '../styled';

import unactive from './unactive.svg';
import active from './active.svg';

const ContainerPick = onClickOutside(styled.div`
  position: absolute;
  background: #fff;
  color: #383838;
  border: 1px solid #d5d5d5;
  border-radius: 3px;
  width: 18em;
  padding: 1rem;
`);

const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

const Title = styled.h3`
  margin: 0;
  font-weight: 400;
  font-family: 'CircularAir Normal';
`;

const Description = styled.p`
  font-weight: 100;
  font-size: 0.95rem;
  margin-right: 1rem;
`;

const Toggle = styled.button`
  width: 4rem;
  height: 2.5rem;
  padding: 0;
  background: rgba(72, 72, 72, 0.08);
  border: 1px solid rgba(72, 72, 72, 0.3);
  border-radius: 24px;
  appearance: none;
  cursor: pointer;
  flex-shrink: 0;

  &.on {
    background: #008489;
    border-color: #008489;
  }
`;

const Tumbler = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background: white;
  top: -1px;
  left: -1px;
  border: 1px solid rgba(72, 72, 72, 0.3);
  border-radius: 24px;
  transition: left 0.2s ease-in-out;
  position: relative;

  ${Toggle}.on & {
    left: 23px;
    border-color: #008489;
  }
`;

const Icon = styled.img`
  position: relative;
  top: 12px;
`;

export default class Instant extends React.Component {
  state = {
    isSelected: false,
    active: false,
  };
  
  onApply = () => {
    this.setState({
      isSelected: false,
    });
  };

  onCancel = () => {
    this.setState({
      isSelected: false,
    });
  };

  onToggle = (isSelected) => {
    this.setState({ isSelected });
  };
  
  onClick = (isSelected) => {
    this.setState({ isSelected });
  };

  onClickOutside = () => {
    this.setState({ isSelected: false });
  };

  onSwitchToggle = () => {
    this.setState(prevState => ({ active: !prevState.active }));
  };

  render(className) {
    return (
      <div>
        <FilterButton
          isSelected={this.state.isSelected}
          onClick={this.onClick}
          onToggle={this.onToggle}
          className={className}
        >
          Instant book {!!this.state.active && '✔︎'}
        </FilterButton>
        {this.state.isSelected && (
          <React.Fragment>
            <ContainerPick handleClickOutside={this.onClickOutside}>
              <Title>Instant book</Title>
              <Container>
                <Description>Listings you can book without waiting for host approval.</Description>
                <Toggle onClick={this.onSwitchToggle} className={this.state.active ? 'on' : ''}>
                  <Tumbler>
                    {this.state.active ? <Icon src={active} /> : <Icon src={unactive} />}
                  </Tumbler>
                </Toggle>
              </Container>

              <Actions>
                <Cancel onClick={this.onCancel}>Cancel</Cancel>
                <Apply onClick={this.onApply}>Apply</Apply>
              </Actions>
            </ContainerPick>
            <Fade />
          </React.Fragment>
        )}
      </div>
    );
  }
}
