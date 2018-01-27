import React from 'react';

import { matchXs } from '../../../helpers';

import { FilterButton, Fade } from '../../../UI';
import { Actions, Cancel, Apply, Save, MobileHeader, Reset, Dates, Close } from '../styled';

import Picker from './Picker';
import { ContainerPick } from './styled';

const getButtonText = (adultsCount, childrenCount, infantsCount) =>
  (adultsCount || childrenCount || infantsCount
    ? `${adultsCount + childrenCount + infantsCount} guests`
    : 'Guests');

export default class Guests extends React.Component {
  state = {
    isSelected: false,
    guests: 0,
    isSelectedGuests: 0,

    adultsCount: 2,
    childrenCount: 0,
    infantsCount: 0,
  };
  onApply = () => {
    this.setState({
      isSelected: false,
    });
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
    this.setState({ [ev]: this.state[ev] + 1 });
  };

  decrement = (ev) => {
    this.setState({ [ev]: this.state[ev] - 1 });
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
          {getButtonText(this.state.adultsCount, this.state.childrenCount, this.state.infantsCount)}
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
                min={this.state.adultsCount === 1}
                max={this.state.adultsCount === 10}
              />
              <Picker
                title="Children"
                description="Ages 2 – 12"
                name="childrenCount"
                onInc={this.increment}
                onDec={this.decrement}
                value={this.state.childrenCount}
                min={this.state.childrenCount === 0}
                max={this.state.childrenCount === 10}
              />
              <Picker
                title="Infants"
                description="Under 2"
                name="infantsCount"
                onInc={this.increment}
                onDec={this.decrement}
                value={this.state.infantsCount}
                min={this.state.infantsCount === 0}
                max={this.state.infantsCount === 10}
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
