import React from "react";
import styled from "styled-components";
import onClickOutside from "react-onclickoutside";
import { FilterButton } from "../../UI";

const DropdownHolder = styled.div`
  position: relative;
`;

const DropdownWindow = onClickOutside(styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
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
    return (
      <div className={this.props.className}>
        <FilterButton
          className={this.props.className}
          onClick={this.onClick}
          selected={this.state.selected}
        >
          {this.props.text}
        </FilterButton>
        <DropdownHolder>
          {this.state.selected && (
            <DropdownWindow
              eventTypes="click"
              handleClickOutside={this.onClickOutside}
            >
              {this.props.children}
              <Actions>
                <Cancel onClick={this.onCancel}>Cancel</Cancel>
                <Apply onClick={this.onApply}>Apply</Apply>
              </Actions>
            </DropdownWindow>
          )}
        </DropdownHolder>
      </div>
    );
  }
}
