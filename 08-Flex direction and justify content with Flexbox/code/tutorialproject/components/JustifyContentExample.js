/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
Flex and justifyContent direction
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
            flexDirection: 'row',
            // justifyContent: 'flex-start'
            // justifyContent: 'flex-end'
            // justifyContent: 'space-between',
            // justifyContent: 'space-around',
            justifyContent: 'center'
        } }>
            <Text style={{width: 50, height: 50, backgroundColor: 'red'}} />
            <Text style={{width: 50, height: 50, backgroundColor: 'green'}} />
            <Text style={{width: 50, height: 50, backgroundColor: 'blue'}} />
        </View>
    );
  }
};
