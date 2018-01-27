import React from 'react';
import styled from 'styled-components';
import onClickOutside from 'react-onclickoutside';

import { FilterButton, Fade } from '../../../UI';

import { Actions, Cancel, Apply } from '../styled';
import Type from './Type';

import homeIcon from './home.svg';
import houseRoomIcon from './houseRoom.svg';
import roomIcon from './room.svg';

const ContainerPick = onClickOutside(styled.div`
  position: absolute;
  background: #fff;
  color: #383838;
  border: 1px solid #d5d5d5;
  border-radius: 3px;
  width: 18em;
`);

export default class Guests extends React.Component {
  state = {
    isSelected: false,
    guests: 0,
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
        >
          Room type
        </FilterButton>
        {this.state.isSelected && (
          <React.Fragment>
            <ContainerPick handleClickOutside={this.onClickOutside}>
              <Type
                title="Entire home"
                description="Have a place to yourself"
                name="entireHome"
                checked={this.props.entireHome}
                icon={homeIcon}
                onChange={this.select}
              />
              <Type
                title="Private room"
                description="Have your own room and share some common spaces"
                name="privateRoom"
                checked={this.props.privateRoom}
                icon={houseRoomIcon}
                onChange={this.select}
              />
              <Type
                title="Shared room"
                description="Stay in a shared space, like a common room"
                name="sharedRoom"
                checked={this.props.sharedRoom}
                icon={roomIcon}
                onChange={this.select}
              />
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
