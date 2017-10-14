/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
*/
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  render() {
    return (
        <View style={ styles.container }>
            <Text style= { styles.firstText }>First line</Text>
            <Text style={styles.secondText}>Second line</Text>
            <Text style={[styles.firstText, styles.secondText]}>first, second</Text>
            <Text style={[styles.secondText, styles.firstText]}>second, first</Text>
        </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#28B463',
        borderWidth: 2,
        borderColor: '#1F618D',
    },
    firstText: {
        margin: 5, color: 'white'
    },
    secondText: {
        margin: 5,
        color: 'yellow',
        fontWeight: 'bold',
        fontSize: 20,
    }
});

AppRegistry.registerComponent('tutorialproject', () => App);
