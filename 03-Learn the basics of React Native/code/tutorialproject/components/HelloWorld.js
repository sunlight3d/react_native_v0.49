/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
*/
import React, { Component } from 'react';
import { Text } from 'react-native';

export default class HelloWorld extends Component {
    render(){
        let greeting = `

            Hello world. My name is Nguyen Duc Hoang`;
        return (
            <Text>{ greeting }</Text>
        );
    }
}
