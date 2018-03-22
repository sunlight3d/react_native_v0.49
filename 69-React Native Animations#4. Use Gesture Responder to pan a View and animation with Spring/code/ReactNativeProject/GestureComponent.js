/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Programming tutorial channel: React Native, Nodejs, .NET Core, Angular,...
*/
import React, { Component } from 'react';
import {
    StyleSheet,
    Text, Dimensions,
    View, Animated,
    PanResponder
} from 'react-native';
export default class GestureComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pan: new Animated.ValueXY(),//pan is a Vector, (x,y) = coordinators 
            scale: new Animated.Value(1)
        };
    }
    componentWillMount() {
        this._panResponder = PanResponder.create({
            //Enable pan gesture
            onMoveShouldSetResponderCapture: () => true,
            onMoveShouldSetPanResponderCapture: () => true,
            onPanResponderGrant: (evt, gestureState) => {
                //Start moving
                this.state.pan.setOffset({ 
                    x: this.state.pan.x._value, 
                    y: this.state.pan.y._value 
                });
                //pan is a Vector. (x, y) = vector's coordinate
                this.state.pan.setValue({ x: 0, y: 0 });                
                Animated.spring(
                    this.state.scale,
                    { toValue: 1.3, friction: 3 }
                ).start();
            },
            onPanResponderMove: Animated.event([
                //Moving
                null, // raw event arg ignored   
                { dx: this.state.pan.x, dy: this.state.pan.y },//dx, dy is gestureState             
            ]),
            onPanResponderRelease: (evt, gestureState) => {
                //Call when stop moving = "release your finger"
                //Merges the offset value into the base value and resets the offset to zero
                this.state.pan.flattenOffset();
                Animated.spring(
                    this.state.scale,
                    { toValue: 1, friction: 3 }
                ).start();
            }
        });
    }
    render() {        
        return (<View style={styles.container}>
            <Animated.View style={[styles.animatedView, 
                { transform: [                    
                    { translateX: this.state.pan.x },
                    { translateY: this.state.pan.y },
                    { scale: this.state.scale },
                ] }]}
                {...this._panResponder.panHandlers}
            >
            </Animated.View >
        </View>)
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,        
        marginVertical: 40
    },
    animatedView: {
        height: 100,
        width: 100,
        borderRadius: 50,
        position: 'absolute',        
        backgroundColor: 'steelblue',
    }
});

