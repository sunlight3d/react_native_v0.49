/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
TextInput and and example of email and password
*/
import React, { Component } from 'react';
import { AppRegistry, TextInput, View, Text } from 'react-native';

// import App from './App';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        typedText: 'please type your text',
        typedPassword: ''
    };
  }
  render() {
    return (
        <View>
            <TextInput style={ {
                height: 40,
                margin: 20,
                padding: 10,
                borderColor: 'gray',
                borderWidth: 1
            } }
            keyboardType='email-address'
            placeholder='Enter your email'
            placeholderTextColor='red'
            onChangeText={
                (text) => {
                    // this.state =
                    this.setState(
                        (previousState) => {
                            return {
                                typedText: text
                            };
                        }
                    );
                }
            }
        />
        <Text style={{marginLeft: 20}}>{this.state.typedText}</Text>
        <TextInput
              style={{height: 40,
                  margin: 20,
                  padding: 10,
                  borderColor: 'gray',
                  borderWidth: 1,
              }}
              keyboardType='default'
              placeholder='Enter your password'
              secureTextEntry={true}
              onChangeText={(text) => {this.setState(() => {
                  return {
                        typedPassword: text
                  };
              })}}
            />
        </View>
    );
  }
}
AppRegistry.registerComponent('tutorialproject', () => App);
