import React from 'react';
import styled from 'styled-components';
import onClickOutside from 'react-onclickoutside';
import Rheostat from 'rheostat';

import { FilterButton, Fade } from '../../UI';
import { Actions, Cancel, Apply } from './styled';

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

  render(className) {
    return (
      <div>
        <FilterButton
          isSelected={this.state.isSelected}
          onClick={this.onClick}
          onToggle={this.onToggle}
          className={className}
        >
          Price
        </FilterButton>
        {this.state.isSelected && (
          <React.Fragment>
            <ContainerPick handleClickOutside={this.onClickOutside}>
              <Rheostat min={10} max={1000} values={[1, 100]} />

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
