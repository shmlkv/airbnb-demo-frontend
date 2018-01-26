import React from 'react';

import { matchXs } from '../../../helpers';

import { FilterButton, Fade } from '../../../UI';
import { Actions, Cancel, Apply, Save, MobileHeader, Reset, Dates, Close } from '../styled';

import Picker from './Picker';
import { ContainerPick } from './styled';

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
    this.setState({ [ev.target.name]: ev.target.value++ });
  };

  decrement = (ev) => {
    console.log(ev.target.name);
    this.setState({ [ev.target.name]: ev.target.value-- });
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
          Guests
        </FilterButton>
        {this.state.isSelected && (
          <React.Fragment>
            <ContainerPick handleClickOutside={this.onClickOutside}>
              {matchXs() && (
                <MobileHeader>
                  <Close onClick={this.onClickOutside} />
                  Guests
                  <Reset onClick={this.onCancel}>Reset</Reset>
                  <Dates />
                </MobileHeader>
              )}
              <Picker
                title="Adults"
                name="adultsCount"
                onInc={this.increment}
                onDec={this.decrement}
                value={this.state.adultsCount}
              />
              <Picker
                title="Children"
                description="Ages 2 – 12"
                name="childrenCount"
                onInc={this.increment}
                onDec={this.decrement}
                value={this.state.childrenCount}
              />
              <Picker
                title="Infants"
                description="Under 2"
                name="infantsCount"
                onInc={this.increment}
                onDec={this.decrement}
                value={this.state.infantsCount}
              />
              {!matchXs() && (
                <Actions>
                  <Cancel onClick={this.onCancel}>Cancel</Cancel>
                  <Apply onClick={this.onApply}>Apply</Apply>
                </Actions>
              )}
              {matchXs() && <Save onClick={this.onApply}>Save</Save>}
            </ContainerPick>
            <Fade />
          </React.Fragment>
        )}
      </div>
    );
  }
}
