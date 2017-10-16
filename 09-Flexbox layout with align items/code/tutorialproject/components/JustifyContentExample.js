/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
Flex and alignItems direction
*/
import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class JustifyContentExample extends Component {
  render() {
    return (
        <View style={ {
            backgroundColor: 'aquamarine',
            // flex: 1,
            height: 500,
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'stretch'
            // alignItems: 'stretch'
        } }>
            <Text style={{width: 50, height: 50, backgroundColor: 'red'}} />
            <Text style={{height: 50, backgroundColor: 'green'}} />
            <Text style={{height: 50, backgroundColor: 'blue'}} />
        </View>
    );
  }
};
