/**
 * Mr Nguyen Duc Hoang
 * Programming tutorial Channel
 * https://www.youtube.com/c/nguyenduchoang
 * This contains MapView component, get from RNTMapManager
 */
import { requireNativeComponent } from 'react-native'
module.exports = {
    MapView: requireNativeComponent('RNTMap', 'RNTMapManager')
}