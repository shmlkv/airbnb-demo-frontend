import React from 'react';
import ScrollLock from 'react-scrolllock';

import { matchXs } from '../../../helpers';

import { FilterButton, Fade } from '../../../UI';
import { Save, Close, Actions, Cancel, Apply, MobileHeader, Reset, Dates } from '../styled';

import arrowRight from './arrowRight.svg';
import { DropdownHolder, DropdownWindow, SelectDate, SelectArrow } from './styled';

const formatDate = (date, defaultText) => (date ? date.format('MMM Do') : defaultText);

function getButtonText(start, end, isSelected) {
  return start || end || isSelected
    ? `${formatDate(start, 'Check in')} — ${formatDate(end, 'Check out')}`
    : 'Dates';
}
export default class extends React.Component {
  state = {
    isSelected: false,
  };

  onClick = () => {
    if (!this.state.isSelected) {
      this.props.onToggle(true);
    } else {
      // this.onApply();
    }
    this.setState({ isSelected: !this.state.isSelected });
  };

  onCancel = () => {
    this.props.onCancel();
    this.setState({ isSelected: false });
  };

  onApply = () => {
    this.props.onApply();
    this.setState({ isSelected: false });
  };

  onClickOutside = () => {
    this.props.onCancel();
    this.setState({ isSelected: false });
  };

  render() {
    return (
      <div className={this.props.className}>
        <FilterButton
          className={this.props.className}
          onClick={this.onClick}
          isSelected={this.state.isSelected}
        >
          {getButtonText(this.props.startDate, this.props.endDate, this.state.isSelected)}
        </FilterButton>
        <DropdownHolder>
          {this.state.isSelected && (
            <React.Fragment>
              <DropdownWindow eventTypes="click" handleClickOutside={this.onClickOutside}>
                {matchXs() && (
                  <MobileHeader>
                    <Close onClick={this.onClickOutside} />
                    Dates
                    <Reset onClick={this.onCancel}>Reset</Reset>
                    <Dates>
                      <SelectDate isSelected={this.props.startDate}>
                        {formatDate(this.props.startDate, 'Check in')}
                      </SelectDate>
                      <SelectArrow src={arrowRight} />
                      <SelectDate isSelected={this.props.endDate}>
                        {formatDate(this.props.endDate, 'Check out')}
                      </SelectDate>
                    </Dates>
                  </MobileHeader>
                )}

                {this.props.children}

                {!matchXs() && (
                  <Actions>
                    <Cancel onClick={this.onCancel}>Cancel</Cancel>
                    <Apply onClick={this.onApply}>Apply</Apply>
                  </Actions>
                )}
                {matchXs() && <Save onClick={this.onApply}>Save</Save>}
              </DropdownWindow>
              <Fade />
              {matchXs() && <ScrollLock />}
            </React.Fragment>
          )}
        </DropdownHolder>
      </div>
    );
  }
}
