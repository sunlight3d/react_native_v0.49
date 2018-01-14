/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
LoginComponent = "Login screen"
*/

import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import { LOGIN_ACTION, LOGOUT_ACTION } from '../actions/actionTypes';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'powderblue',
    }
});

export default class LoginComponent extends Component {
    static navigationOptions = {
        title: 'Log In',
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 20, textAlign: 'center',margin: 10}}>
                    This is Login screen
                </Text> 
                <TouchableHighlight style={{ 
                                            margin: 20, width: 200, height: 45,
                                            backgroundColor: 'steelblue',padding: 10,
                                            alignItems: 'center',
                                         }}
                    onPress={() => {
                        navigation.dispatch({ type: LOGIN_ACTION })                                         
                    }}>
                    <Text style={{color: 'white', fontSize: 18}}>Login</Text>
                </TouchableHighlight>                               
            </View>
        );
    }
}