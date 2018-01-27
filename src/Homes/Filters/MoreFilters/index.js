import React from 'react';
import Rheostat from 'rheostat';
import '../Price/rheostat.css';
import ScrollLock from 'react-scrolllock';

import { FilterButton, Fade } from '../../../UI';
import {
  Wrapper,
  Container,
  Title,
  Average,
  PriceMapping,
  Types,
  Price,
  Rooms,
  Range,
} from './styled';

import Type from '../RoomType/Type';
import Picker from '../Guests/Picker';

import prices from '../Price/prices.svg';

import homeIcon from '../RoomType/home.svg';
import houseRoomIcon from '../RoomType/houseRoom.svg';
import roomIcon from '../RoomType/room.svg';

export default class MoreFilters extends React.Component {
  state = {
    isSelected: false,

    types: {
      entireHome: false,
      privateRoom: false,
      sharedRoom: false,
    },
    price: {
      selectedStartPrice: 10,
      selectedEndPrice: 1000,
    },
    rooms: {
      bedrooms: 0,
      beds: 0,
      bathrooms: 0,
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

  select = (ev) => {
    this.setState({ type: { [ev.target.name]: !this.state[ev.target.value] } });
  };
  increment = (value) => {
    this.setState({ rooms: { [value]: this.state.rooms[value] + 1 } });
  };

  decrement = (value) => {
    console.log(this.state.rooms[value]);
    console.log(value);
    this.setState(prevState => ({
      rooms: {
        ...prevState.rooms,
        [value]: this.state.rooms[value] - 1,
      },
    }));
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
                    onChange={this.select}
                  />
                  <Type
                    title="Private room"
                    description="Have your own room and share some common spaces"
                    name="privateRoom"
                    checked={this.state.types.privateRoom}
                    icon={houseRoomIcon}
                    onChange={this.select}
                  />
                  <Type
                    title="Shared room"
                    description="Stay in a shared space, like a common room"
                    name="sharedRoom"
                    checked={this.state.types.sharedRoom}
                    icon={roomIcon}
                    onChange={this.select}
                  />
                </Types>
                <Price>
                  <Title>Price Range</Title>
                  <Range>
                    ${this.state.price.selectedStartPrice} — ${this.state.price.selectedEndPrice}
                  </Range>
                  <Average>The average nightly price is $75.</Average>
                  <PriceMapping src={prices} />
                  <Rheostat
                    onChange={(slider) => {
                      this.setState({
                        price: {
                          selectedStartPrice: slider.values[0],
                          selectedEndPrice: slider.values[1],
                        },
                      });
                    }}
                    min={10}
                    max={1000}
                    values={[
                      this.state.price.selectedStartPrice,
                      this.state.price.selectedEndPrice,
                    ]}
                  />
                </Price>
                <Rooms>
                  <Title>Rooms and beds</Title>
                  <Picker
                    description="Bedrooms"
                    onInc={this.onRoomsAndBedsIncrement}
                    onDec={this.decrement}
                    value={`${this.state.rooms.bedrooms}+`}
                    min={this.state.infantsCount === 0}
                    max={this.state.infantsCount === 10}
                  />
                  <Picker
                    description="Beds"
                    onInc={this.increment}
                    onDec={this.decrement}
                    value={`${this.state.rooms.beds}+`}
                    min={this.state.infantsCount === 0}
                    max={this.state.infantsCount === 10}
                  />
                  <Picker
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
