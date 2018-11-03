/**
 * Mr Nguyen Duc Hoang
 * Programming tutorial Channel
 * https://www.youtube.com/c/nguyenduchoang
 */

import React, {Component} from 'react'
import {View} from 'react-native'
import {MapView} from './MapView'

export default class App extends Component{
  render() {
    let newRegion = {
      latitude: 20.998034,
      longitude: 105.864891,
      latitudeDelta: 0.1,//like "zoom level"
      longitudeDelta: 0.1,
    }
    return (
      <MapView style={{flex: 1}} zoomEnabled={true} region={newRegion}>
        
      </MapView>
    )
  }
}

