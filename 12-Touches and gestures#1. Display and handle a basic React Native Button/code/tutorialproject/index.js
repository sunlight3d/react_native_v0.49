/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
Display and handle a basic React Native Button
*/
import React, { Component } from 'react';
import { Alert, AppRegistry, StyleSheet, View } from 'react-native';
import Button from 'react-native-button';

export default class App extends Component {
    _onPressButton = () => {
        Alert.alert("You pressed the button !");
    }
    render() {
        return(<View style={ {
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center'
                            } }>
                            <Button style={{
                                fontSize: 25,
                                color: 'white',
                                backgroundColor: 'green',
                                padding: 15,
                                borderRadius: 20
                            }}
                            onPress={this._onPressButton}
                            >This is a button</Button>
                            {/* <View style={{  backgroundColor: 'green',
                                            padding: 10,
                                            borderRadius: 16,
                                            shadowRadius: 20,
                                            shadowOpacity: 0.5
                                            }}>
                                <Button onPress={this._onPressButton}
                                title="This is a button"
                                color='red'
                                >
                                </Button>
                            </View> */}


        </View>);
    }
}
AppRegistry.registerComponent('tutorialproject', () => App);
