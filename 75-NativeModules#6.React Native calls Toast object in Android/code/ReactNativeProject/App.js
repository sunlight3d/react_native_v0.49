/**
 * Mr Nguyen Duc Hoang
 * Programming tutorial Channel
 * https://www.youtube.com/c/nguyenduchoang
 */

import React, {Component} from 'react'
import {View, Text, Button} from 'react-native'
import { NativeModules } from 'react-native'
const {ToastModule} = NativeModules;

export default class App extends Component{
  _onPressButton() {
    // ToastModule.showText(`This is Android's Toast`, 
    //                       ToastModule.LENGTH_SHORT)
    //Show constants
    ToastModule.showText(`pi = ${ToastModule.PI}`, 
                          ToastModule.LENGTH_LONG)

  }
  render() {    
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Button style={{flex: 1, justifyContent:'center'}}
          onPress={this._onPressButton}  
          title="RN calls Toast"
        >
          
        </Button>
      </View>
    )
  }
}

