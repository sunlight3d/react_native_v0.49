/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
Flex direction
*/
import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class FlexExample extends Component {
  render() {
    return (
        <View style={ {flex: 1, flexDirection: 'column', margin: 20} }>
            <Text style={{width: 50, height: 50, backgroundColor: 'red', marginBottom: 5}} />
            <Text style={{width: 50, height: 50, backgroundColor: 'green', marginBottom: 5}} />
            <Text style={{width: 50, height: 50, backgroundColor: 'blue'}} />
        </View>
    );
  }
};
