import React from 'react';
import Rheostat from 'rheostat';
import '../Price/rheostat.css';
import ScrollLock from 'react-scrolllock';

import { matchXs, matchMd } from '../../../helpers';

import { FilterButton, Fade } from '../../../UI';

import {
  Wrapper,
  Container,
  Title,
  Average,
  PriceMapping,
  Range,
  Subtitle,
  MoreDescription,
  MoreWrapper,
  Link,
  FilterBlock,
  Actions,
  Cancel,
  Apply,
  FilterWrapper,
} from './styled';

import { MobileHeader, Reset, Close, Save, SaveWrapper } from '../styled';

import Checkbox from '../RoomType/Checkbox';
import Picker from '../Guests/Picker';

import prices from '../Price/prices.svg';

import homeIcon from '../RoomType/home.svg';
import houseRoomIcon from '../RoomType/houseRoom.svg';
import roomIcon from '../RoomType/room.svg';
import Switcher from '../Instant/Switcher';

const initialState = {
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
  superhost: false,
  instant: false,
  amenities: {
    heating: false,
    kitchen: false,
    TV: false,
    wirelessInternet: false,
    iron: false,
    washer: false,
  },
  facilities: {
    elebator: false,
    pool: false,
    parking: false,
    wheelchair: false,
    bathhouse: false,
    garden: false,
  },
};
export default class MoreFilters extends React.Component {
  state = initialState;

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

  onReset = () => {
    this.setState(initialState);
  };

  onSwitchToggle = () => {
    this.setState(prevState => ({ active: !prevState.active }));
  };

  onChangeType = (name) => {
    this.setState(prevState => ({
      types: {
        ...prevState.types,
        [name]: !prevState.types[name],
      },
    }));
  };

  onChangeAmenities = (name) => {
    this.setState(prevState => ({
      amenities: {
        ...prevState.amenities,
        [name]: !prevState.amenities[name],
      },
    }));
  };

  onChangeFacilities = (name) => {
    this.setState(prevState => ({
      facilities: {
        ...prevState.facilities,
        [name]: !prevState.facilities[name],
      },
    }));
  };

  onSwitchSuperhost = () => {
    this.setState(prevState => ({ superhost: !prevState.superhost }));
  };

  onSwitchInstant = () => {
    this.setState(prevState => ({ instant: !prevState.instant }));
  };

  incrementRooms = (name) => {
    this.setState(prevState => ({
      rooms: {
        ...prevState.rooms,
        [name]: prevState.rooms[name] + 1,
      },
    }));
  };

  decrementRooms = (name) => {
    this.setState(prevState => ({
      rooms: {
        ...prevState.rooms,
        [name]: prevState.rooms[name] - 1,
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
                {matchXs() && (
                  <MobileHeader>
                    <Close onClick={this.onClickOutside} />
                    More filters
                    <Reset onClick={this.onReset}>Reset</Reset>
                  </MobileHeader>
                )}
                {matchMd() && (
                  <FilterBlock>
                    <Title>Room Type</Title>
                    <Checkbox
                      title="Entire home"
                      description="Have a place to yourself"
                      name="entireHome"
                      checked={this.state.types.entireHome}
                      icon={homeIcon}
                      onChange={this.onChangeType}
                    />
                    <Checkbox
                      title="Private room"
                      description="Have your own room and share some common spaces"
                      name="privateRoom"
                      checked={this.state.types.privateRoom}
                      icon={houseRoomIcon}
                      onChange={this.onChangeType}
                    />
                    <Checkbox
                      title="Shared room"
                      description="Stay in a shared space, like a common room"
                      name="sharedRoom"
                      checked={this.state.types.sharedRoom}
                      icon={roomIcon}
                      onChange={this.onChangeType}
                    />
                  </FilterBlock>
                )}

                {matchMd() && (
                  <FilterBlock>
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
                  </FilterBlock>
                )}
                <FilterBlock>
                  <Title>Rooms and beds</Title>
                  <FilterWrapper>
                    <Picker
                      name="bedrooms"
                      description="Bedrooms"
                      onInc={this.incrementRooms}
                      onDec={this.decrementRooms}
                      value={`${this.state.rooms.bedrooms}+`}
                      min={this.state.rooms.bedrooms === 0}
                      max={this.state.rooms.bedrooms === 10}
                    />
                    <Picker
                      name="beds"
                      description="Beds"
                      onInc={this.incrementRooms}
                      onDec={this.decrementRooms}
                      value={`${this.state.rooms.beds}+`}
                      min={this.state.rooms.beds === 0}
                      max={this.state.rooms.beds === 10}
                    />
                    <Picker
                      name="bathrooms"
                      description="Bathrooms"
                      onInc={this.incrementRooms}
                      onDec={this.decrementRooms}
                      value={`${this.state.rooms.bathrooms}+`}
                      min={this.state.rooms.bathrooms === 0}
                      max={this.state.rooms.bathrooms === 10}
                    />
                  </FilterWrapper>
                </FilterBlock>

                <FilterBlock>
                  <Title>More options</Title>
                  <FilterWrapper>
                    {matchMd() && (
                      <MoreWrapper>
                        <div>
                          <Subtitle>Instant Book</Subtitle>
                          <MoreDescription>Secure a reservation instantly</MoreDescription>
                          <Link href="#">Learn more</Link>
                        </div>
                        <Switcher
                          onSwitchToggle={this.onSwitchInstant}
                          isActive={this.state.instant}
                        />
                      </MoreWrapper>
                    )}
                    <MoreWrapper>
                      <div>
                        <Subtitle>Superhost</Subtitle>
                        <MoreDescription>Stay with recognized hosts.</MoreDescription>
                        <Link href="#">Learn more</Link>
                      </div>
                      <Switcher
                        onSwitchToggle={this.onSwitchSuperhost}
                        isActive={this.state.superhost}
                      />
                    </MoreWrapper>
                  </FilterWrapper>
                </FilterBlock>

                <FilterBlock>
                  <Title>Amenities</Title>
                  <div className="row">
                    <div className="col-md-6">
                      <Checkbox
                        description="Heating"
                        name="heating"
                        checked={this.state.amenities.heating}
                        onChange={this.onChangeAmenities}
                      />
                    </div>
                    <div className="col-md-6">
                      <Checkbox
                        description="Kitchen"
                        name="kitchen"
                        checked={this.state.amenities.kitchen}
                        onChange={this.onChangeAmenities}
                      />
                    </div>
                    <div className="col-md-6">
                      <Checkbox
                        description="TV"
                        name="TV"
                        checked={this.state.amenities.TV}
                        onChange={this.onChangeAmenities}
                      />
                    </div>
                    <div className="col-md-6">
                      <Checkbox
                        description="Wireless Internet"
                        name="wirelessInternet"
                        checked={this.state.amenities.wirelessInternet}
                        onChange={this.onChangeAmenities}
                      />
                    </div>
                    <div className="col-md-6">
                      <Checkbox
                        description="Iron"
                        name="iron"
                        checked={this.state.amenities.iron}
                        onChange={this.onChangeAmenities}
                      />
                    </div>
                    <div className="col-md-6">
                      <Checkbox
                        description="Washer"
                        name="washer"
                        checked={this.state.amenities.washer}
                        onChange={this.onChangeAmenities}
                      />
                    </div>
                  </div>
                </FilterBlock>

                <FilterBlock>
                  <Title>Facilities</Title>
                  <div className="row">
                    <div className="col-md-6">
                      <Checkbox
                        description="Elebator"
                        name="elebator"
                        checked={this.state.facilities.elebator}
                        onChange={this.onChangeFacilities}
                      />
                    </div>
                    <div className="col-md-6">
                      <Checkbox
                        description="Pool"
                        name="pool"
                        checked={this.state.facilities.pool}
                        onChange={this.onChangeFacilities}
                      />
                    </div>
                    <div className="col-md-6">
                      <Checkbox
                        description="Free parking on permises"
                        name="parking"
                        checked={this.state.facilities.parking}
                        onChange={this.onChangeFacilities}
                      />
                    </div>
                    <div className="col-md-6">
                      <Checkbox
                        description="Wheelchair accessible"
                        name="wheelchair"
                        checked={this.state.facilities.wheelchair}
                        onChange={this.onChangeFacilities}
                      />
                    </div>
                    <div className="col-md-6">
                      <Checkbox
                        description="Bathhouse"
                        name="bathhouse"
                        checked={this.state.facilities.bathhouse}
                        onChange={this.onChangeFacilities}
                      />
                    </div>
                    <div className="col-md-6">
                      <Checkbox
                        description="Garden"
                        name="garden"
                        checked={this.state.facilities.garden}
                        onChange={this.onChangeFacilities}
                      />
                    </div>
                  </div>
                </FilterBlock>

                {!matchMd() && (
                  <Actions>
                    <Cancel onClick={this.onCancel}>Cancel</Cancel>
                    <Apply onClick={this.onApply}>See homes</Apply>
                  </Actions>
                )}
                {matchXs() && (
                  <SaveWrapper>
                    <Save onClick={this.onApply}>Save</Save>
                  </SaveWrapper>
                )}
              </Container>
            </Wrapper>
            <ScrollLock />
            <Fade />
          </div>
        )}
      </div>
    );
  }
}
