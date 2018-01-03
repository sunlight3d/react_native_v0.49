/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
ThirdComponent
*/
import React, { Component } from 'react';
import {
    Text, View
} from 'react-native';

export default class ThirdComponent extends Component {
    render() {
        return (
            <View style={{ flex: 1, 
                    backgroundColor: 'tomato',
                    alignItems: 'center', 
                    justifyContent: 'center' }}>
                <Text style={{fontWeight: 'bold', fontSize: 22, color: 'white'}}>
                    This is Third Screen
                </Text>
            </View>
        );
    }
}