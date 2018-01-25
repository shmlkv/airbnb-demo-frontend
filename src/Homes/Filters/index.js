import React from 'react';
import styled from 'styled-components';

import Dates from './Dates';
import Guests from './Guests';
import Type from './Type';
import Price from './Price';
import Instant from './Instant';
import MoreFilters from './MoreFilters';

const Box = styled.div`
  border-bottom: 0.5px solid rgba(72, 72, 72, 0.3);
  position: fixed;
  top: 80.5px;
  right: 0;
  left: 0;
  background: white;
  z-index: 1;
`;

const Container = styled.div`
  max-width: 966px;
  margin: 0 auto;
  clear: both;
  display: flex;
  box-sizing: border-box;
  padding-left: 0.5rem;
`;

class Filters extends React.Component {
  state = {
    opened: null,
  };
  setOpened = (opened) => {
    this.setState({ opened: this.state.opened === opened ? null : opened });
  };

  render() {
    return (
      <Box>
        <Container>
          <Dates
            closeDropdown={() => this.setOpened(null)}
            onApply={(startDate, endDate) => this.setState({ startDate, endDate })}
          />
          <Guests text="Guest" />
          <Type text="Room type" className="hidden-xs hidden-sm hidden-md" />
          <Price text="Price" className="hidden-xs hidden-sm hidden-md" />
          <Instant text="Instant book" className="hidden-xs hidden-sm hidden-md" />
          <MoreFilters text="More filters" />
        </Container>
      </Box>
    );
  }
}

export default Filters;
