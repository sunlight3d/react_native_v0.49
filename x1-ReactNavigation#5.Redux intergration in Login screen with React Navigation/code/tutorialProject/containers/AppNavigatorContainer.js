/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
connect AppNavigator with AppNavigatorContainer
*/

import React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

//Screen names
import { LoginScreen, MainScreen, ProfileScreen } from '../screenNames';
import LoginComponent from '../components/LoginComponent';
import MainComponent from '../components/MainComponent';
import ProfileComponent from '../components/ProfileComponent';


export const AppNavigator = StackNavigator({
    LoginScreen: { screen: LoginComponent },
    MainScreen: { screen: MainComponent },
    ProfileScreen: { screen: ProfileComponent },
});

const AppWithNavigationState = ({ dispatch, nav }) => (
    <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

const mapStateToProps = state => ({
    nav: state.nav,
});

const AppNavigatorContainer = connect(mapStateToProps)(AppWithNavigationState);
export default AppNavigatorContainer;