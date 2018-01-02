/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
React Navigation tutorials
*/

import { AppRegistry } from 'react-native';
// import App from './App';
import { StackNavigator } from 'react-navigation';
//Screen names
import { MainScreen, DetailScreen, ThirdScreen } from './screenNames';
//Components
import MainComponent from './components/MainComponent';
import DetailComponent from './components/DetailComponent';
import ThirdComponent from './components/ThirdComponent';

const App = StackNavigator({
    MainScreen: {
        screen: MainComponent,
        navigationOptions: {
            headerTitle: 'Main',
        },
    },
    DetailScreen: {
        screen: DetailComponent,
        navigationOptions: {
            headerTitle: 'Detail',
        },
    },
    ThirdScreen: {
        screen: ThirdComponent,
        navigationOptions: {
            headerTitle: 'Third',
        },
    },

});
// export default RootNavigator;
AppRegistry.registerComponent('tutorialProject', () => App);
