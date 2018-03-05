/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Main from './screens/Main';

const Navigator = StackNavigator({
  Main: {
    screen: Main
  }
});

export default class App extends Component {
  render() {
    return (<Navigator />);
  }
}


