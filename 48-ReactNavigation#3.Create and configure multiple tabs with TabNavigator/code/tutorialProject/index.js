/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
React Navigation tutorials => multiple tabs with TabNavigator
*/

import { AppRegistry } from 'react-native';
import { TabNavigator } from 'react-navigation';
// import App from './App';
//Components
import HomeComponent from './components/HomeComponent';
import InfoComponent from './components/InfoComponent';
import SettingsComponent from './components/SettingsComponent';
import CloudComponent from './components/CloudComponent';
//Screen names
import { Home, Info, Settings, Cloud } from './screenNames';

let routeConfigs = {
    Home: {
        screen: HomeComponent,
    },
    Info: {
        screen: InfoComponent,
    },
    Settings: {
        screen: SettingsComponent,
    },
    Cloud: {
        screen: CloudComponent,
    },
};
let tabNavigatorConfig = {    
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
        activeTintColor: 'blue',
        labelStyle: {
            fontSize: 13,
        },
        style: {
            backgroundColor: 'lightgray',
            padding: -10
        },    
        // showLabel: false    
    },    
    // order: [Settings, Home, Cloud, Info],
};
const App = TabNavigator(routeConfigs, tabNavigatorConfig);
AppRegistry.registerComponent('tutorialProject', () => App);
