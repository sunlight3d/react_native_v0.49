/**
 * Mr Nguyen Duc Hoang
 * Programming tutorial Channel
 * https://www.youtube.com/c/nguyenduchoang
 */

import React, {Component} from 'react'
import {View, Text, Button} from 'react-native'
import { NativeModules } from 'react-native'
const {ToastModule} = NativeModules;
import { DeviceEventEmitter } from 'react-native'

export default class App extends Component{
  async _onPressButton() {
    // ToastModule.showText(`This is Android's Toast`, 
    //                       ToastModule.LENGTH_SHORT)
    //Show constants
    /*
    ToastModule.showText(`pi = ${ToastModule.PI}`, 
                          ToastModule.LENGTH_LONG)
    */
    //Callback
    /*
    ToastModule.doCallbackTask(100, (name, email, age) => {
      //callback for "success"
      ToastModule.showText(`Result: Name = ${name}, 
            Email = ${email}, age=${age}`, ToastModule.LENGTH_LONG)
    }, (errorMessage) => {
      //Callback for "failed"
      ToastModule.showText(`Error: ${errorMessage}`, ToastModule.LENGTH_LONG)
    })
    */
   //Promise, can use async / await
   try {
      let result = await ToastModule.doPromiseTask(100)
      ToastModule.showText(`Result => ${JSON.stringify(result)}`, 
          ToastModule.LENGTH_LONG)
   }catch(error) {
      ToastModule.showText(`Error: ${error}`,ToastModule.LENGTH_LONG)
   }
  }
  async componentDidMount() {
    DeviceEventEmitter.addListener("eventA", event => {
      ToastModule.showText(`Received event: ${JSON.stringify(event)}`,
                            ToastModule.LENGTH_LONG)
    })
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

