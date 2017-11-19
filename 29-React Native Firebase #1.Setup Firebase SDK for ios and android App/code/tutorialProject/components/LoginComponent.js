/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
FlatList Component with Images
Update an existing Food by sending PUT request
*/
import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View, Image, Alert, Platform, TouchableHighlight, RefreshControl } from 'react-native';
import firebase from 'react-native-firebase';

export default class LoginComponent extends Component {
    constructor(props) {
        super(props);        
    }    
    render() {
        return (
            <View style={{ flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 0 }}>
                <Text style={{color: 'red'}}>Test react native firebase</Text>            
            </View>
        );
    }
}