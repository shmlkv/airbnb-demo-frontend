import React from 'react';

import { FilterButton, Fade } from '../../../UI';
import { Actions, Cancel, Apply } from '../styled';
import { Wrapper, Container, Title, Description, Rooms, Types } from './styled';

import Type from '../RoomType/Type';
import Picker from '../Guests/Picker';

import homeIcon from '../RoomType/home.svg';
import houseRoomIcon from '../RoomType/houseRoom.svg';
import roomIcon from '../RoomType/room.svg';

export default class MoreFilters extends React.Component {
  state = {
    isSelected: false,
    rooms: {
      bedrooms: 0,
      beds: 0,
      bathrooms: 0,
    },
    types: {
      entireHome: false,
      privateRoom: true,
      sharedRoom: false,
    },
  };

  onApply = () => {
    this.setState({
      isSelected: false,
    });
  };

  onCancel = () => {
    this.setState({
      isSelected: false,
    });
  };

  onToggle = (isSelected) => {
    this.setState({ isSelected });
  };

  onClick = (isSelected) => {
    this.setState({ isSelected });
  };

  onClickOutside = () => {
    this.setState({ isSelected: false });
  };

  onSwitchToggle = () => {
    this.setState(prevState => ({ active: !prevState.active }));
  };
  selectTypes = (ev) => {
    this.setState({ [ev.target.name]: !this.state[ev.target.name] });
  };
  render() {
    return (
      <div>
        <FilterButton
          isSelected={this.state.isSelected}
          onClick={this.onClick}
          onToggle={this.onToggle}
        >
          More Filters
        </FilterButton>
        {this.state.isSelected && (
          <div>
            <Wrapper>
              <Container className="col-xs-12 col-lg-8" handleClickOutside={this.onClickOutside}>
                <Types>
                  <Title>Room Type</Title>
                  <Type
                    title="Entire home"
                    description="Have a place to yourself"
                    name="entireHome"
                    checked={this.state.types.entireHome}
                    icon={homeIcon}
                    onChange={this.selectTypes}
                  />
                  <Type
                    title="Private room"
                    description="Have your own room and share some common spaces"
                    name="privateRoom"
                    checked={this.state.types.privateRoom}
                    icon={houseRoomIcon}
                    onChange={this.props.selectTypes}
                  />
                  <Type
                    title="Shared room"
                    description="Stay in a shared space, like a common room"
                    name="sharedRoom"
                    checked={this.state.types.sharedRoom}
                    icon={roomIcon}
                    onChange={this.props.selectTypes}
                  />
                </Types>
                <Rooms>
                  <Title>Rooms and beds</Title>
                  <Picker
                    // title="Infants"
                    description="Bedrooms"
                    onInc={this.increment}
                    onDec={this.decrement}
                    value={`${this.state.rooms.bedrooms}+`}
                    min={this.state.infantsCount === 0}
                    max={this.state.infantsCount === 10}
                  />
                  <Picker
                    // title="Infants"
                    description="Beds"
                    onInc={this.increment}
                    onDec={this.decrement}
                    value={`${this.state.rooms.beds}+`}
                    min={this.state.infantsCount === 0}
                    max={this.state.infantsCount === 10}
                  />
                  <Picker
                    // title="Infants"
                    description="Bathrooms"
                    onInc={this.increment}
                    onDec={this.decrement}
                    value={`${this.state.rooms.bathrooms}+`}
                    min={this.state.infantsCount === 0}
                    max={this.state.infantsCount === 10}
                  />
                </Rooms>
                {/* <Actions>
                  <Cancel onClick={this.onCancel}>Cancel</Cancel>
                  <Apply onClick={this.onApply}>Apply</Apply>
                </Actions> */}
              </Container>
            </Wrapper>
            <Fade />
          </div>
        )}
      </div>
    );
  }
}
