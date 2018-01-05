/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
CloudComponent is a "tab"
*/
import React, { Component } from 'react';
import { DetailScreen, ThirdScreen } from '../screenNames';
import Button from 'react-native-button';
import {
    Text, View, Image
} from 'react-native';
const backgroundColor = '#964f8e';

export default class CloudComponent extends Component {    
    static navigationOptions = ({ navigation }) => {        
        let tabBarLabel = 'Cloud';
        let tabBarIcon = () => (
            <Image
                source={require('../icons/cloud-icon.png')}
                style={{ width: 26, height: 26, tintColor: backgroundColor }}
            />
        );
        return { tabBarLabel, tabBarIcon };
    }
    render() {           
        return (<View style={{
            flex: 1,
            backgroundColor: backgroundColor,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white' }}>
                This is Cloud Screen
            </Text>            
        </View>);
    }
}