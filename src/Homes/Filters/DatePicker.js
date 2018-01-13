import React from "react";
import styled from "styled-components";
import onClickOutside from "react-onclickoutside";

import { FilterButton, Fade } from "../../UI";
import closeButton from "./close.svg";

const dateFormat = (startDate, endDate, selected, separator) => {
  if (selected)
    return `${
      !!startDate ? startDate.format("MMM Do") : "Check in "
    } ${separator} ${!!endDate ? endDate.format("MMM Do") : "Check out"}`;
  else return "Dates";
};

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

  @media (min-width: 450px) {
    display: none;
  }
`;

const Close = styled.button`
  position: absolute;
  background: url(${closeButton});
  left: 0.5rem;
  top: 1rem;
  width: 1rem;
  height: 1rem;
  background-size: cover;
  border: none;
  cursor: pointer;

  @media (min-width: 450px) {
    display: none;
  }
`;

const Reset = styled.button`
  position: absolute;
  right: 0.5rem;
  top: 1rem;
  color: #0f7276;
  border: none;
  cursor: pointer;

  @media (min-width: 450px) {
    display: none;
  }
`;

const Dates = styled.p`
  text-align: left;
  margin-top: 2rem;

  @media (min-width: 450px) {
    display: none;
  }
`;

const Save = styled.button`
  position: fixed;
  bottom: 3.5rem;
  left: 0.5rem;
  right: 0.5rem;
  width: calc(100% - 1rem);
  color: #fff;
  background: #ff5a5f;
  border-radius: 4px;
  height: 3rem;
  cursor: pointer;

  @media (min-width: 450px) {
    display: none;
  }
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

  render() {
    const matchXs = window.matchMedia("(max-width: 450px)").matches;

    return (
      <div className={this.props.className}>
        <FilterButton
          className={this.props.className}
          onClick={this.onClick}
          selected={this.state.selected}
        >
          {dateFormat(
            this.props.selectedStartDate,
            this.props.selectedEndDate,
            this.state.selected,
            "—"
          )}
        </FilterButton>
        <DropdownHolder>
          {this.state.selected && (
            <div>
              <DropdownWindow
                eventTypes="click"
                handleClickOutside={this.onClickOutside}
              >
                {matchXs && (
                  <DateHeader>
                    <Close onClick={this.onClickOutside} />
                    Dates
                    <Reset onClick={this.onCancel}>Reset</Reset>
                    <Dates>
                      {dateFormat(
                        this.props.selectedStartDate,
                        this.props.selectedEndDate,
                        this.state.selected,
                        "→"
                      )}
                    </Dates>
                  </DateHeader>
                )}
                {this.props.children}
                {!matchXs && (
                  <Actions>
                    <Cancel onClick={this.onCancel}>Cancel</Cancel>
                    <Apply onClick={this.onApply}>Apply</Apply>
                  </Actions>
                )}
                {matchXs && <Save>Save</Save>}
              </DropdownWindow>
              <Fade />
            </div>
          )}
        </DropdownHolder>
      </div>
    );
  }
}
