/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
App = Redux intergration with React Navigation
*/

import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import AppReducer from './reducers';
import AppNavigatorContainer from './containers/AppNavigatorContainer';

export default class App extends Component {
  store = createStore(AppReducer);

  render() {
    return (
      <Provider store={this.store}>
        <AppNavigatorContainer />        
      </Provider>
    );
  }
}

AppRegistry.registerComponent('tutorialProject', () => App);
