import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from '../store';
import AppRouting from './AppRouting';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppRouting />
      </Provider>
    );
  }
}

export default App;
