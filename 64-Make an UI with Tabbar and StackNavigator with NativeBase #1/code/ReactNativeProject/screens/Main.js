/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
*/
import { Container, Text, Content } from 'native-base';
import { Icon } from 'native-base';
import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import {Platform} from 'react-native';
import HomeTab from './tabs/HomeTab';
import PlanetTab from './tabs/PlanetTab';
import BasketTab from './tabs/BasketTab';
import BookTab from './tabs/BookTab';
import CartTab from './tabs/CartTab';

export default class Main extends Component {
    static navigationOptions = {
        headerLeft: <Icon 
            name={Platform.OS === 'ios' ? 'ios-basket' : 'md-basket'} 
            style={{ paddingLeft: 10 }} />,
        title: "NativeBase Example",
        headerRight: <Icon 
        name={Platform.OS === 'ios' ? 
                'ios-compass' : 'md-compass'} 
        style={{ paddingRight: 10 }} />
    }
    render() {
        return <MainNavigator>
            <Text>My main Screen</Text>
        </MainNavigator>;        
    }
}
const MainNavigator = TabNavigator({
    HomeTab: {
        screen: HomeTab
    },
    PlanetTab: {
        screen: PlanetTab
    },
    BasketTab: {
        screen: BasketTab
    },
    BookTab: {
        screen: BookTab
    },
    CartTab: {
        screen: CartTab
    },
}, {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: 'bottom', 
    tabBarOptions: {
        showIcon: true,
        showLabel: false,  
        style: {
            backgroundColor: 'white',
        },          
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',   
    }
});
