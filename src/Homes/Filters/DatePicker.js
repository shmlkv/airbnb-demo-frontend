import React from "react";
import styled from "styled-components";
import onClickOutside from "react-onclickoutside";
import { FilterButton, Fade } from "../../UI";
import CloseButton from "./Close.png";

const DropdownHolder = styled.div`
  position: relative;
`;

const DropdownWindow = onClickOutside(styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border: 1px solid #d5d5d5;
  border-radius: 3px;
  z-index: 1;
`);

const Actions = styled.div`
  display: flex;
  background: #fff;
`;

const Cancel = styled.button`
  color: #636363;
  padding: 16px;
  font-size: 16px;
  background: #fff;
  cursor: pointer;
  border: none;
`;

const Apply = styled.button`
  color: #0f7276;
  margin-left: auto;
  padding: 16px;
  font-size: 16px;
  background: #fff;
  cursor: pointer;
  border: none;
`;

const DateHeader = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 100px;
  background: #fff;
  text-align: center;
  padding: 1rem 0.5rem;
`;

const Close = styled.div`
  position: absolute;
  background: url(${CloseButton});
  left: 0.5rem;
  top: 1rem;
  width: 1rem;
  height: 1rem;
  background-size: cover;
`;

export default class extends React.Component {
  state = {
    selected: false
  };

  onClick = () => {
    if (!this.state.selected) {
      this.props.onToggle(true);
    } else {
      this.onApply();
    }
    this.setState({ selected: !this.state.selected });
  };

  onCancel = () => {
    this.props.onCancel();
    this.setState({ selected: false });
  };

  onApply = () => {
    this.props.onApply();
    this.setState({ selected: false });
  };

  onClickOutside = () => {
    this.props.onCancel();
    this.setState({ selected: false });
  };

  buttonText = (startDate, endDate, selected) => {
    if (selected) {
      let start = startDate ? startDate.format("MMM Do") : "Check in ";
      let end = endDate ? endDate.format("MMM Do") : "Check out";
      return start + " — " + end;
    } else return "Dates";
  };

  matchMobile = () => {
    if (window.matchMedia("(max-width: 450px)").matches) return true;
  };

  render() {
    return (
      <div className={this.props.className}>
        <FilterButton
          className={this.props.className}
          onClick={this.onClick}
          selected={this.state.selected}
        >
          {}
          {this.buttonText(
            this.props.selectedStartDate,
            this.props.selectedEndDate,
            this.state.selected
          )}
        </FilterButton>
        <DropdownHolder>
          {this.state.selected && (
            <div>
              <DropdownWindow
                eventTypes="click"
                handleClickOutside={this.onClickOutside}
              >
                {this.matchMobile && (
                  <DateHeader>
                    <Close onClick={this.onClickOutside} />
                    Dates
                  </DateHeader>
                )}
                {this.props.children}
                {!this.matchMobile && (
                  <Actions>
                    <Cancel onClick={this.onCancel}>Cancel</Cancel>
                    <Apply onClick={this.onApply}>Apply</Apply>
                  </Actions>
                )}
              </DropdownWindow>
              <Fade />
            </div>
          )}
        </DropdownHolder>
      </div>
    );
  }
}
