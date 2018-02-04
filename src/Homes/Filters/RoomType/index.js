import React from 'react';
import styled from 'styled-components';
import onClickOutside from 'react-onclickoutside';

import { FilterButton, Fade } from '../../../UI';

import { Actions, Cancel, Apply } from '../styled';
import Checkbox from './Checkbox';

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

const CheckboxWrapper = styled.div`
  margin: 0 1rem;
`;

const getButtonText = (entireHome, privateRoom, sharedRoom) =>
  `Room type${
    entireHome || privateRoom || sharedRoom ? ` • ${entireHome + privateRoom + sharedRoom}` : ''
  }`;
export default class Guests extends React.Component {
  state = {
    entireHome: false,
    privateRoom: false,
    sharedRoom: false,
    isSelected: false,
  };

  onApply = () => {
    this.setState({ isSelected: false });
  };

  onCancel = () => {
    this.setState({ isSelected: false });
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

  select = (name) => {
    this.setState(prevState => ({
      [name]: !prevState[name],
    }));
  };

  render() {
    return (
      <div>
        <FilterButton
          isSelected={this.state.isSelected}
          onClick={this.onClick}
          onToggle={this.onToggle}
          className={this.props.className}
        >
          {getButtonText(this.state.entireHome, this.state.privateRoom, this.state.sharedRoom)}
        </FilterButton>
        {this.state.isSelected && (
          <React.Fragment>
            <ContainerPick handleClickOutside={this.onClickOutside}>
              <CheckboxWrapper>
                <Checkbox
                  title="Entire home"
                  description="Have a place to yourself"
                  name="entireHome"
                  checked={this.state.entireHome}
                  icon={homeIcon}
                  onChange={this.select}
                />
                <Checkbox
                  title="Private room"
                  description="Have your own room and share some common spaces"
                  name="privateRoom"
                  checked={this.state.privateRoom}
                  icon={houseRoomIcon}
                  onChange={this.select}
                />
                <Checkbox
                  title="Shared room"
                  description="Stay in a shared space, like a common room"
                  name="sharedRoom"
                  checked={this.state.sharedRoom}
                  icon={roomIcon}
                  onChange={this.select}
                />
              </CheckboxWrapper>

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
