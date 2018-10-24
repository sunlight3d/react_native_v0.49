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
import {NativeModules, NativeEventEmitter} from 'react-native';
//Destructuring TaskManager from NativeModules
const {TaskManager} = NativeModules;
const taskManagerEventEmitter = new NativeEventEmitter(TaskManager);
export default class App extends Component{
  constructor(props) {
    super(props)
    this.state = {eventATimes: 0, eventBTimes: 0}
  }

  async componentDidMount() {
    TaskManager.doTask1('Learn React Native', 95)
    TaskManager.doTask2(`Login with user's info`, {
      name: "Hoang",
      email: "sunlight4d@gmail.com"
    })
    /*
    TaskManager.getAllTasks((error, tasks) => {
      if(error) {
        alert(`Error: ${JSON.stringify(error)}`)
      } else {
        alert(`Tasks: ${JSON.stringify(tasks)}`)
      }
    })
    */
    //Use Promise
    /*
    TaskManager.getSomeTasks("others").then((tasks) => {
      //then = "resolve"
      alert(`getSomeTasks = ${JSON.stringify(tasks)}`)
    }).catch((error) => {
      //catch = "reject"
      //alert(`getSomeTasks. Error = ${JSON.stringify(error)}`)
      //alert(`keys = ${JSON.stringify(Object.keys(error))}`)
      alert(`Error's code: ${error.code}, userInfo = ${JSON.stringify(error.userInfo)}`)
    })
    */
   //Use async / await
   /*
   try {
      let tasks = await TaskManager.getSomeTasks("all") //await = "wait this line finished"
      alert(`getSomeTasks = ${JSON.stringify(tasks)}`)
   } catch(error) {
      alert(`Error's code: ${error.code}, userInfo = ${JSON.stringify(error.userInfo)}`)    
   }
   */
  //Listen EventA from Objective C
  taskManagerEventEmitter.addListener('EventA', (event) => {
    // alert(`EventA's name = ${event.name}, data = ${event.data}`) 
    this.setState(prevState => {
      return {eventATimes: prevState.eventATimes + 1}
    })
  })
  taskManagerEventEmitter.addListener('EventB', (event) => {
    // alert(`EventB's data = ${event.name}`) 
    this.setState(prevState => {
      return {eventBTimes: prevState.eventBTimes + 1}
    })
  })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>React Native calls Objective-C</Text>
        <Text style={styles.welcome}>EventA times : {this.state.eventATimes}</Text>
        <Text style={styles.welcome}>EventB times : {this.state.eventBTimes}</Text>
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
