/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
LoginStatusContainer
*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { NavigationActions } from 'react-navigation';

//Screen names
import { LoginScreen, MainScreen, ProfileScreen } from '../screenNames';
import { LOGIN_ACTION, LOGOUT_ACTION } from '../actions/actionTypes';

class LoginStatusComponent extends Component {
    render() {        
        if (!this.propsisLoggedIn) {
            return <Text>Please log in</Text>;
        }
        return (
            <View>
                <Text style={{fontSize: 20,textAlign: 'center',margin: 10,}}>
                    {'You are "logged in" right now'}
                </Text>
                <TouchableHighlight style={{
                    margin: 20, width: 200, height: 45,
                    backgroundColor: 'steelblue', padding: 10,
                    alignItems: 'center',
                }}
                    onPress={() => {
                        dispatch(NavigationActions.navigate({ routeName: ProfileScreen }))
                    }}>
                    <Text style={{ color: 'white', fontSize: 18 }}>Profile</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    isLoggedIn: state.auth.isLoggedIn,
});
const LoginStatusContainer = connect(mapStateToProps)(LoginStatusComponent);
export default LoginStatusContainer;