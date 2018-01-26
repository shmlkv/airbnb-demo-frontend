import React from 'react';

import { FilterButton, Fade } from '../../../UI';
import { ContainerPick } from '../Guests/styled';
import { Actions, Cancel, Apply } from '../styled';

export default class Guests extends React.Component {
  state = {
    isSelected: false,
    guests: 0,
    isSelectedGuests: 0,
    adultsCount: 0,
    childrenCount: 0,
    infantsCount: 0,
  };
  onApply = () => {
    this.props.closeDropdown();
    this.setState({
      isSelected: false,
      guests: this.state.isSelectedGuests,
    });
    this.props.onApply(this.state.guests);
  };

  onCancel = () => {
    this.props.closeDropdown();
    this.setState({
      isSelected: false,
      guests: this.state.guests,
    });
  };

  onToggle = (isSelected) => {
    this.setState({ isSelected });
  };
  onClick = (isSelected) => {
    this.setState({ isSelected });
  };
  onClickOutside = () => {
    // this.props.onCancel();
    this.setState({ isSelected: false });
  };

  increment = (ev) => {
    console.log(ev.target.name);
    // this.setState(prevState => ({ [ev.target.name]: prevSev.target.value++ }));
  };

  decrement = (ev) => {
    console.log(ev.target.name);
    // this.setState({ [ev.target.name]: ev.target.value-- });
  };

  render(className) {
    return (
      <div>
        <FilterButton
          isSelected={this.state.isSelected}
          onClick={this.onClick}
          onToggle={this.onToggle}
          className={className}
          text="text"
        >
          Room type
        </FilterButton>
        {this.state.isSelected && (
          <React.Fragment>
            <ContainerPick handleClickOutside={this.onClickOutside}>
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
