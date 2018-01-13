import React from "react";
import moment from "moment";
import "react-dates/initialize";

import DatePicker from "./DatePicker";
import { DayPickerRangeController } from "react-dates";

import "react-dates/lib/css/_datepicker.css";
import "./datepicker.css";

export default class extends React.Component {
  state = {
    selected: false,
    startDate: null,
    endDate: null,
    selectedStartDate: null,
    selectedEndDate: null,
    focusedInput: "startDate"
  };

  onApply = () => {
    this.props.closeDropdown();
    this.setState({
      selected: false,
      startDate: this.state.selectedStartDate,
      endDate: this.state.selectedEndDate
    });
    this.props.onApply(
      this.state.selectedStartDate,
      this.state.selectedEndDate
    );
  };

  onCancel = () => {
    this.props.closeDropdown();
    this.setState({
      selected: false,
      selectedStartDate: this.state.startDate,
      selectedEndDate: this.state.endDate
    });
  };
  onToggle = selected => {
    this.setState({ selected });
  };

  matchMobile = () => {
    if (window.matchMedia("(max-width: 450px)").matches) return true;
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
          orientation={this.matchMobile() ? "vertical" : "horizontal"}
          isDayBlocked={day => day.isBefore(moment(), "day")}
          numberOfMonths={2}
          hideKeyboardShortcutsPanel
          focusedInput={this.state.focusedInput}
          onFocusChange={focusedInput =>
            this.setState({ focusedInput: focusedInput || "startDate" })
          }
          startDate={this.state.selectedStartDate}
          endDate={this.state.selectedEndDate}
          onDatesChange={({ startDate, endDate }) => {
            this.setState({
              selectedStartDate: startDate,
              selectedEndDate: endDate
            });
          }}
        />
      </DatePicker>
    );
  }
}
