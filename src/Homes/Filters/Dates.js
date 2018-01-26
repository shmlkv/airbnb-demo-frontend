import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';

import 'react-dates/lib/css/_datepicker.css';
import { DayPickerRangeController } from 'react-dates';
import './datepicker.css';

import { matchXs, matchMd } from '../../helpers';
import DatePicker from './DatePicker';

export default class extends React.Component {
  state = {
    isSelected: false,
    startDate: null,
    endDate: null,
    selectedStartDate: null,
    selectedEndDate: null,
    focusedInput: 'startDate',
  };

  onApply = () => {
    this.props.closeDropdown();
    this.setState(
      {
        isSelected: false,
      },
      () => {
        this.props.onApply(this.state.selectedStartDate, this.state.selectedEndDate);
      },
    );
  };

  onCancel = () => {
    this.props.closeDropdown();
    this.setState({
      isSelected: false,
      selectedStartDate: this.state.startDate,
      selectedEndDate: this.state.endDate,
    });
  };

  onToggle = () => {
    this.setState({ isSelected: true });
  };

  render() {
    return (
      <DatePicker
        onCancel={this.onCancel}
        onToggle={this.onToggle}
        onApply={this.onApply}
        selectedStartDate={this.state.selectedStartDate}
        selectedEndDate={this.state.selectedEndDate}
      >
        <DayPickerRangeController
          orientation={matchXs() ? 'vertical' : 'horizontal'}
          isDayBlocked={day => day.isBefore(moment(), 'day')}
          isSelected={this.state.isSelected}
          numberOfMonths={matchMd() ? 1 : 2}
          hideKeyboardShortcutsPanel
          focusedInput={this.state.focusedInput}
          onFocusChange={focusedInput =>
            this.setState({ focusedInput: focusedInput || 'startDate' })
          }
          startDate={this.state.selectedStartDate}
          endDate={this.state.selectedEndDate}
          onDatesChange={({ startDate, endDate }) => {
            this.setState({
              selectedStartDate: startDate,
              selectedEndDate: endDate,
            });
          }}
        />
      </DatePicker>
    );
  }
}
