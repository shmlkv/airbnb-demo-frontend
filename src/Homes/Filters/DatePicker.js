import React from 'react';
import styled from 'styled-components';
import onClickOutside from 'react-onclickoutside';
import ScrollLock from 'react-scrolllock';

import { matchXs } from '../../helpers';

import { FilterButton, Fade } from '../../UI';
import closeButton from './close.svg';
import arrowRight from './arrowRight.svg';

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

  @media (min-width: 575px) {
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

  @media (min-width: 540px) {
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
  background: none;

  @media (min-width: 540px) {
    display: none;
  }
`;

const Dates = styled.p`
  text-align: left;
  margin-top: 2rem;

  @media (min-width: 540px) {
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

  @media (min-width: 540px) {
    display: none;
  }
`;

const SelectDate = styled.span`
  font-size: 18px;
  color: ${props => (props.isSelected ? '#0F7276' : '#000')};
  padding-bottom: 2px;
  border-bottom: 1px solid ${props => (props.isSelected ? '#0F7276' : '#fff')};
`;

const SelectArrow = styled.img`
  height: 10px;
  margin: 0 1rem;
`;

const formatDate = (date, defaultText) => (date ? date.format('MMM Do') : defaultText);

const getButtonText = (start, end, isSelected) => {
  if (isSelected) return `${formatDate(start, 'Check in')} — ${formatDate(end, 'Check out')}`;
  return 'Dates';
};

export default class extends React.Component {
  state = {
    isSelected: false,
  };

  onClick = () => {
    if (!this.state.isSelected) {
      this.props.onToggle(true);
    } else {
      this.onApply();
    }
    this.setState({ isSelected: !this.state.isSelected });
  };

  onCancel = () => {
    this.props.onCancel();
    this.setState({ isSelected: false });
  };

  onApply = () => {
    this.props.onApply();
    this.setState({ isSelected: false });
  };

  onClickOutside = () => {
    this.props.onCancel();
    this.setState({ isSelected: false });
  };

  render() {
    return (
      <div className={this.props.className}>
        <FilterButton
          className={this.props.className}
          onClick={this.onClick}
          isSelected={this.state.isSelected}
        >
          {getButtonText(
            this.props.selectedStartDate,
            this.props.selectedEndDate,
            this.state.isSelected,
          )}
        </FilterButton>
        <DropdownHolder>
          {this.state.isSelected && (
            <React.Fragment>
              <DropdownWindow eventTypes="click" handleClickOutside={this.onClickOutside}>
                {matchXs() && (
                  <DateHeader>
                    <Close onClick={this.onClickOutside} />
                    Dates
                    <Reset onClick={this.onCancel}>Reset</Reset>
                    <Dates>
                      <SelectDate isSelected={this.props.selectedStartDate}>
                        {formatDate(this.props.selectedStartDate, 'Check in')}
                      </SelectDate>
                      <SelectArrow src={arrowRight} />
                      <SelectDate isSelected={this.props.selectedEndDate}>
                        {formatDate(this.props.selectedEndDate, 'Check out')}
                      </SelectDate>
                    </Dates>
                  </DateHeader>
                )}

                {this.props.children}

                {!matchXs() && (
                  <Actions>
                    <Cancel onClick={this.onCancel}>Cancel</Cancel>
                    <Apply onClick={this.onApply}>Apply</Apply>
                  </Actions>
                )}
                {matchXs() && <Save onClick={this.onApply}>Save</Save>}
              </DropdownWindow>
              <Fade />
              {matchXs() && <ScrollLock />}
            </React.Fragment>
          )}
        </DropdownHolder>
      </div>
    );
  }
}
