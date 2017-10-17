/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
TextInput and and example of multiline
*/
import React, { Component } from 'react';
import { AppRegistry, TextInput, View, Text, Keyboard } from 'react-native';

// import App from './App';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        typedText: 'please type your text',
        typedPassword: '',
        typedDescription: ''
    };
  }
  componentWillMount () {
      this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', ()=>{
          this.setState(() => {
              return {typedText: 'Keyboard is shown'}
          })
      });
      this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
        this.setState(() => {
            return {typedText: 'Keyboard Hide'};
        });
      });
  }

  componentWillUnmount () {
      this.keyboardDidShowListener.remove();
      this.keyboardDidHideListener.remove();
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
            //   autoFocus={true}
              onChangeText={(text) => {this.setState(() => {
                  return {
                        typedPassword: text
                  };
              })}}
            />
            <TextInput
                style={{height: 100,
                        margin: 20,
                        padding: 10,
                        borderColor: 'gray',
                        borderWidth: 1,
                      }}
                multiline={true}
                borderBottomColor='green'
                borderBottomWidth={3}
                borderLeftColor='green'
                borderLeftWidth={3}
                borderRightColor='green'
                borderRightWidth={3}
                editable={true}
                returnKeyType='done'
                onSubmitEditing={Keyboard.dismiss}
                onChangeText={(text) => {this.setState(() => {
                    return {
                          typedDescription: text
                    };
                })}}

            />
        </View>
    );
  }
}
AppRegistry.registerComponent('tutorialproject', () => App);
