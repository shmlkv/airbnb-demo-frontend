import React from 'react';

import { FilterButton, Fade } from '../../../UI';
import { Actions, Cancel, Apply } from '../styled';
import { ContainerPick, Container, Title, Description } from './styled';

export default class MoreFilters extends React.Component {
  state = {
    isSelected: false,
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
        >
          More Filters
        </FilterButton>
        {this.state.isSelected && (
          <React.Fragment>
            <ContainerPick handleClickOutside={this.onClickOutside}>
              <Title>More filters modal</Title>
              <Container>
                <Description>...</Description>
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
