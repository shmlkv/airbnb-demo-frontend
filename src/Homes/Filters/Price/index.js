import React from 'react';
import styled from 'styled-components';
import Rheostat from 'rheostat';
import onClickOutside from 'react-onclickoutside';

import './rheostat.css';

import { FilterButton, Fade } from '../../../UI';

import prices from './prices.svg';
import { Actions, Cancel, Apply } from '../styled';

const getButtonText = (isSelected, startPrice, endPrice) => {
  let value = 'Price';
  if (startPrice !== 10 || endPrice !== 1000) {
    value = `$${startPrice} — $${endPrice}`;
  }
  return value;
};

const ContainerPick = onClickOutside(styled.div`
  position: absolute;
  background: #fff;
  color: #383838;
  border: 1px solid #d5d5d5;
  border-radius: 3px;
  width: 18em;
  padding: 1rem;
`);

const Title = styled.p`
  font-size: 16px;
  color: #383838;
  font-weight: lighter;
`;

const Average = styled.p`
  font-size: 12px;
  font-weight: lighter;
`;

const PriceMapping = styled.img`
  margin-left: 37px;
  margin-bottom: -16px;
  margin-top: 20px;
`;

export default class Price extends React.Component {
  state = {
    isSelected: false,
    startPrice: null,
    endPrice: null,
    selectedStartPrice: 10,
    selectedEndPrice: 1000,
  };

  onApply = () => {
    this.props.closeDropdown();
    this.setState({
      isSelected: false,
      startPrice: this.state.selectedStartPrice,
      endPrice: this.state.selectedEndPrice,
    });
    this.props.onApply(this.state.selectedStartPrice, this.state.selectedEndPrice);
  };

  onCancel = () => {
    this.props.closeDropdown();
    this.setState({
      isSelected: false,
      selectedStartPrice: this.state.startPrice,
      selectedEndPrice: this.state.endPrice,
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

  render() {
    return (
      <div>
        <FilterButton
          isSelected={this.state.isSelected}
          onClick={this.onClick}
          onToggle={this.onToggle}
          className={this.props.className}
        >
          {getButtonText(
            this.state.isSelected,
            this.state.selectedStartPrice,
            this.state.selectedEndPrice,
          )}
        </FilterButton>
        {this.state.isSelected && (
          <React.Fragment>
            <ContainerPick handleClickOutside={this.onClickOutside}>
              <Title>
                ${this.state.selectedStartPrice} — ${this.state.selectedEndPrice}
              </Title>
              <Average>The average nightly price is $75.</Average>
              <PriceMapping src={prices} />
              <Rheostat
                onChange={(slider) => {
                  this.setState({
                    selectedStartPrice: slider.values[0],
                    selectedEndPrice: slider.values[1],
                  });
                }}
                min={10}
                max={1000}
                values={[this.state.selectedStartPrice, this.state.selectedEndPrice]}
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
