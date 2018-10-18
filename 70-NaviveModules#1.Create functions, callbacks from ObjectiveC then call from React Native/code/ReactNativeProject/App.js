/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, 
    StyleSheet, Text,
    View} 
  from 'react-native';
//Native modules
import {NativeModules} from 'react-native';
//Destructuring TaskManager from NativeModules
const {TaskManager} = NativeModules;

export default class App extends Component{
  componentDidMount() {
    TaskManager.doTask1('Learn React Native', 95)
    TaskManager.doTask2(`Login with user's info`, {
      name: "Hoang",
      email: "sunlight4d@gmail.com"
    })
    TaskManager.getAllTasks((error, tasks) => {
      if(error) {
        alert(`Error: ${JSON.stringify(error)}`)
      } else {
        alert(`Tasks: ${JSON.stringify(tasks)}`)
      }
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>React Native calls Objective-C</Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }  
});
