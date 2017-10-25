/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
An Example of ViewPagerAndroid
*/

import React, { Component } from 'react';
import { 
    AppRegistry, 
    StyleSheet,
    ScrollView, 
    Text, View,
    ViewPagerAndroid,
    } from 'react-native';

    export default class ViewPagerExample extends Component {
        render() {         
            return(
                <ViewPagerAndroid 
                style={{flex: 1}}
                initialPage={0}          
                onPageScroll={(event)=>{
                    //console.log(`offset = ${event.nativeEvent.offset}`)
                }}  
                onPageScrollStateChanged={(state)=>{
                    console.log(`Scrolling state = ${state}`);
                }}    
                onPageSelected={(event) => {
                    console.log(`Scrolled to page: ${event.nativeEvent.position}`)
                }}
            >
                <View style={{backgroundColor:'lightseagreen'}}>
                    <Text style={styles.textStyle}>Screen 1</Text>
                </View>
                <View style={{backgroundColor:'palevioletred'}}>
                    <Text style={styles.textStyle}>Screen 2</Text>
                </View>
                <View style={{backgroundColor:'salmon'}}>
                    <Text style={styles.textStyle}>Screen 3</Text>
                </View>
            </ViewPagerAndroid>);        
        }
    }
    const styles = StyleSheet.create({
        textStyle: {
            fontSize: 20,
            fontWeight: 'bold',
            fontSize: 20,
            padding: 15, 
            color: 'white',                                            
            textAlign: 'center'
        }
    });