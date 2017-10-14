/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
*/
import React, { Component } from 'react';
import { Image } from 'react-native';

export default class Robot extends Component {
  render() {
      const imageSource = {
          uri: "https://upload.wikimedia.org/wikipedia/commons/0/05/HONDA_ASIMO.jpg"
      };      
    return (
        <Image source={ imageSource }
                style={ {width: 300, height: 200} }
        >
        </Image>
    );
  }
}
