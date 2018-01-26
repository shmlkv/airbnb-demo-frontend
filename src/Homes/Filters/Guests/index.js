import React from 'react';

import { FilterButton } from '../../../UI';

export default class Guests extends React.Component {
  state = {
    adults: null,
  };
  render(className, text) {
    return <FilterButton className={className}>{text}</FilterButton>;
  }
}
