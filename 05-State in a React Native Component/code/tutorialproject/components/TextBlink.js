/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
Example of State in React Native. V0.49
*/
import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {
        showText: true
    };
    var taskToDo = () => {
        // this.state = "blabla" //Do not allow, only in constructor
        this.setState(previousState => {
            return {
                showText: !previousState.showText
            };
        });

    };
    const timeToBlink = 500; //500 miliseconds
    setInterval(taskToDo, timeToBlink);
  }

  render() {
    //After state changed, component is rendered
    let textToDisplay = this.state.showText ? this.props.inputText : ' ';
    return (
        <Text>{textToDisplay }</Text>
    );
  }
}
export default class TextBlink extends Component {
  render() {
    return (
        <View>
            <Blink inputText='Hello, how are you?'></Blink>
            <Blink inputText='I am '></Blink>
        </View>
    );
  }
}
