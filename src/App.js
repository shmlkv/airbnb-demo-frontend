import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import 'normalize.css';
import 'flexboxgrid2';
import './App.css';

import Landing from './Landing';
import Homes from './Homes';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Landing} /> <Route path="/homes" component={Homes} />{' '}
        </div>
      </BrowserRouter>
    );
  }
}

render(<App />, document.getElementById('root'));

export default App;
