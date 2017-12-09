/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
Redux Saga in React Native
*/

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
//Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import allReducers from './reducers';
import CounterContainer from './containers/CounterContainer';

let store = createStore(allReducers);
const App = () => (
    <Provider store={store}>
        <CounterContainer />
    </Provider>
);

AppRegistry.registerComponent('tutorialProject', () => App);
