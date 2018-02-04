import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import 'normalize.css';
import 'flexboxgrid2/flexboxgrid2.css';
import './App.css';

import Landing from './Landing';
import Homes from './Homes';

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <Route path="/" exact component={Landing} />
      <Route path="/homes" component={Homes} />
    </React.Fragment>
  </BrowserRouter>
);

export default App;
