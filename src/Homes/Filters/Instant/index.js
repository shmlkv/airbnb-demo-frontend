import React from 'react';

import { FilterButton, Fade } from '../../../UI';
import { Actions, Cancel, Apply } from '../styled';

import { ContainerPick, Container, Title, Description } from './styled';

import Switcher from './Switcher';

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

  render() {
    return (
      <div>
        <FilterButton
          isSelected={this.state.isSelected}
          onClick={this.onClick}
          onToggle={this.onToggle}
          className={this.props.className}
        >
          Instant book {!!this.state.active && '✔︎'}
        </FilterButton>
        {this.state.isSelected && (
          <React.Fragment>
            <ContainerPick handleClickOutside={this.onClickOutside}>
              <Title>Instant book</Title>
              <Container>
                <Description>Listings you can book without waiting for host approval.</Description>
                <Switcher onSwitchToggle={this.onSwitchToggle} isActive={this.state.active} />
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
