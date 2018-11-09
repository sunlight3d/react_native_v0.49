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
  async _onPressButton() {
    // ToastModule.showText(`This is Android's Toast`, 
    //                       ToastModule.LENGTH_SHORT)
    //Show constants
    // ToastModule.showText(`pi = ${ToastModule.PI}`, 
    //                       ToastModule.LENGTH_LONG)
    //call Callback function in Java
    /*
    ToastModule.doCallbackTask(11,//or 100 
      (name, email, age) => {
        //success result
        ToastModule.showText(`Result: Name = ${name}, 
            Email = ${email}, age=${age}`, ToastModule.LENGTH_LONG)
      }, 
      (error) => {
        //failed result
        ToastModule.showText(`Error: ${error}`,ToastModule.LENGTH_LONG)
      })
      */
     //Call Promise
     try {
        let result = await ToastModule.doPromiseTask(11)
        ToastModule.showText(`Result => ${JSON.stringify(result)}`, 
          ToastModule.LENGTH_LONG)
     } catch(error) {
        ToastModule.showText(`Error: ${error}`,ToastModule.LENGTH_LONG)
     }
     
  }
  render() {    
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Button style={{flex: 1, justifyContent:'center'}}
          onPress={this._onPressButton}  
          title="RN calls Android"
        >
          
        </Button>
      </View>
    )
  }
}

