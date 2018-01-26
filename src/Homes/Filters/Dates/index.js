import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';

import 'react-dates/lib/css/_datepicker.css';
import { DayPickerRangeController } from 'react-dates';
import './datepicker.css';

import { matchXs, matchMd } from '../../../helpers';
import DatePicker from './DatePicker';

export default class Dates extends React.Component {
  state = {
    startDate: null,
    endDate: null,
    // selectedStartDate: null,
    // selectedEndDate: null,
    focusedInput: 'startDate',
  };

  onApply = () => {
    this.props.closeDropdown();
    this.setState({}, () => {
      this.props.onApply(this.state.startDate, this.state.endDate);
    });
  };

  onCancel = () => {
    this.props.closeDropdown();
    // this.setState({
    //   startDate: this.state.startDate,
    //   endDate: this.state.endDate,
    // });
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
        startDate={this.state.startDate}
        endDate={this.state.endDate}
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
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onDatesChange={({ startDate, endDate }) => {
            this.setState({
              startDate,
              endDate,
            });
          }}
        />
      </DatePicker>
    );
  }
}
