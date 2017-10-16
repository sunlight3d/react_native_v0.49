/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
Fixed dimensions
*/
import React, { Component } from 'react';
import { View } from 'react-native';

export default class FixedDimension extends Component {
  render() {
    return (
        <View>
            <View style={ {width: 100, height: 200, backgroundColor: 'blue'} }></View>
            <View style={ {width: 200, height: 200, backgroundColor: 'red'} }></View>
            <View style={ {width: 200, height: 200, backgroundColor: 'cyan'} }></View>
        </View>

    );
  }
}
