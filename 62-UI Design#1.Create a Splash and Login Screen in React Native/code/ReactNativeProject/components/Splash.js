/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
Splash screen
*/
import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
export default class Splash extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Hello, This is Splash</Text>
            </View>
        )
    }
} 
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black'
    }
})