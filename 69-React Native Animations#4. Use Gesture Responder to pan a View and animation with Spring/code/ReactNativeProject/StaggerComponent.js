/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
An example of Stagger animation in React Native
*/
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View, Animated, Easing,
} from 'react-native';

export default class StaggerComponent extends Component {  
    constructor(props) {
        super(props);
        var animatedValues = [];    
        for (var i = 0; i < 1000; i++) {
            animatedValues.push(new Animated.Value(0));//We will have 1000 views for animations
        }        
        this.state = {
            animatedValues: animatedValues
        };
    }
    componentDidMount() {
        this.staggerAnimate();
    }
    staggerAnimate = () => {
        const animations = this.state.animatedValues.map((animatedValue) => {
            //Convert animatedValue to Animate.timing
            return Animated.timing(
                animatedValue,
                {
                    toValue: 1,
                    duration: 3000, //3000 miliseconds = 3 seconds
                }
            )
        });
        Animated.stagger(10, animations).start();//Animation1 start, after 10ms, Animation2 start, ...
    }
    render() { 
        const animatedViews = this.state.animatedValues.map((animatedValue, index) => {
            return <Animated.View 
                key={index}
                style={[styles.animatedView, {
                    opacity: animatedValue, 
                    // backgroundColor: index % 2 === 0 ? 'skyblue' : 'steelblue'                   
                }]}
            />
        });
        return (
            <View style={styles.container}>
                {animatedViews}
            </View>
        );   
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',   //This automatically wrap next line of "circle's views"
        marginVertical: 40     
    },
    animatedView: {
        height: 12,
        width: 12,  
        borderRadius: 6,     
        // backgroundColor: 'red',
        backgroundColor: 'steelblue',
        margin: 3
    }
})