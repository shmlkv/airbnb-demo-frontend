import React from 'react';

import { DropDownWindow, Title, Description, Button, Value, Selectors } from './styled';

export default ({
  title, description, name, onInc, onDec, value, min, max,
}) => (
  <DropDownWindow>
    <div>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </div>
    <Selectors>
      <Button name={name} onClick={() => onDec(name)} disabled={min}>
        –
      </Button>
      <Value>{value}</Value>
      <Button name={name} onClick={() => onInc(name)} disabled={max}>
        +
      </Button>
    </Selectors>
  </DropDownWindow>
);
