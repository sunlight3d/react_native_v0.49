/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text, TouchableOpacity,
  View, Animated, Image,
  Easing, Dimensions
} from 'react-native';
var { width, height } = Dimensions.get('window');

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeValue: new Animated.Value(0),
      xValue: new Animated.Value(0),
      springValue: new Animated.Value(0.5),
      rotateValue: new Animated.Value(0),  
    }
  }
  _fadeAnimation = () => {
    // alert("Press Fade!");
    Animated.timing(this.state.fadeValue, {
      toValue: 1,
      duration: 1200, //1000 miliseconds = 1 second
    }).start();
  }
  _moveAnimation = () => {
    Animated.timing(this.state.xValue, {
      toValue: width - 100,
      duration: 1000,
      easing: Easing.linear,      
      // easing: Easing.back(),     
      // easing: Easing.cubic,      
    }).start(() => {
      //Call after finish this animation !
      Animated.timing(this.state.xValue, {
        toValue: 0,
        duration: 1000,
        easing: Easing.linear,
        // easing: Easing.back(),     
        // delay: 1000,//run after 1 seconds
      }).start(() => {
        this._moveAnimation();
      });
    });
  }
  _springAnimation = () => {
    Animated.spring(this.state.springValue,{
        toValue: 1.5,
        friction: 1
      }).start();
  }
  _rotateAnimation = () => {
    Animated.sequence([
      Animated.timing(this.state.rotateValue, {
        toValue: 100,
        duration: 1000,//1000 miliseconds = 1 second
        easing: Easing.linear,
      }),
      Animated.timing(this.state.rotateValue, {
        toValue: 0,
        duration: 0,
      }),
    ]).start(() => {
      this._rotateAnimation();//rotate infinitely 
    }); 
  }
  _moveAndRotateAnimation = () => {
    Animated.parallel([
      //This contains Animations which run at the same time !
      this._moveAnimation(),
      this._rotateAnimation()
    ]).start();
  }
  render() {
    const interpolatedRotateAnimation = this.state.rotateValue.interpolate({
      inputRange: [0, 100],
      outputRange: ['0deg', '360deg'],
    });
    return (
      <View style={styles.container}>
        {/* <Animated.View style={[styles.animationView, 
          // {opacity: this.state.fadeValue}
          { left: this.state.xValue }
        ]}>

        </Animated.View> */}
        <Animated.Image
          source={require('./images/icons8-react-native.png')}
          style={[styles.imageView, 
            { left: this.state.xValue },
            // { transform: [{ scale: this.state.springValue }], alignSelf: 'center' }
            { transform: [{ rotate: interpolatedRotateAnimation }] },
          ]}>
        </Animated.Image>
        <TouchableOpacity style={styles.button}
          onPress={this._moveAndRotateAnimation}
        >
          <Text style={styles.buttonText}>Animate</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',    
  },  
  animationView: {
    width: 100,
    height: 100,
    backgroundColor: 'skyblue',    
  },
  button: {
    backgroundColor: "steelblue",
    height: 45,
    marginTop: 20,    
    alignSelf: "center"
  },
  buttonText: {
    color: 'white',
    padding: 12,
    paddingHorizontal: 20,
    fontWeight: 'bold',
    fontSize: 18
  },
  imageView: {
    width: 100,
    height: 100,
    backgroundColor: 'transparent',
  }
});
