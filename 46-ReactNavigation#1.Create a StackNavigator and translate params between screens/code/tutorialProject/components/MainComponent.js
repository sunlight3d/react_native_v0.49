/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
MainComponent
*/
import React, { Component } from 'react';
import { DetailScreen, ThirdScreen } from '../screenNames';
import Button from 'react-native-button';
import {
    Text, View
} from 'react-native';

export default class MainComponent extends Component {    
    render() {           
        const { navigation } = this.props; 
        let dataSendToDetail = {
            name: "Star Wars",
            releaseYear: 1977
        };    
        return (
            <View style={{
                flex: 1,
                backgroundColor: 'dodgerblue',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white' }}>
                    This is Main Screen
                </Text>   
                <Button
                    containerStyle={{ padding: 10, margin: 20, width: 200, height: 45, borderRadius: 10, backgroundColor: 'darkviolet' }}
                    style={{ fontSize: 18, color: 'white' }}
                    onPress={() => {
                        // this.props.navigate(DetailScreen);
                        navigation.navigate(DetailScreen, dataSendToDetail);
                    }}>
                    Navigate to Detail
                </Button>   
                <Button
                    containerStyle={{ padding: 10, margin: 20, width: 200, height: 45, borderRadius: 10, backgroundColor: 'darkviolet' }}
                    style={{ fontSize: 18, color: 'white' }}
                    onPress={() => {
                        navigation.navigate(ThirdScreen);
                    }}>
                    Navigate to Third
                </Button>                           
            </View>
        );
    }
}