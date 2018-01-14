/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
MainComponent = "Main screen"
*/
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import LoginStatusContainer from '../containers/LoginStatusContainer';
import AuthButtonContainer from '../containers/AuthButtonContainer';

export default class MainComponent extends Component {
    static navigationOptions = {
        title: 'Main Screen',
    }

    render() {
        return (
            <View style={{flex: 1,justifyContent: 'center',
                alignItems: 'center',backgroundColor: '#F5FCFF'}}>
                <LoginStatusMessage />
                <AuthButton />
            </View>
        );
    }
}

