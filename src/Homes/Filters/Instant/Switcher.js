import React from 'react';

import { Switcher, Tumbler, Icon } from './styled';

import unactive from './unactive.svg';
import active from './active.svg';

export default ({ onSwitchToggle, isActive }) => (
  <Switcher onClick={onSwitchToggle} active={isActive}>
    <Tumbler active={isActive}>
      <Icon src={isActive ? active : unactive} />
    </Tumbler>
  </Switcher>
);
