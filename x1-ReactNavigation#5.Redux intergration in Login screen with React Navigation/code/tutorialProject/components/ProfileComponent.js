/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
ProfileComponent = "Profile screen"
*/
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class ProfileComponent extends Component {
    static navigationOptions = {
        title: 'Main Screen',
    }

    render() {
        return (
            <View style={{flex: 1,justifyContent: 'center',
                alignItems: 'center',backgroundColor: 'skyblue'}}>
                <Text>This is Profile Screen</Text>
            </View>
        );
    }
}

