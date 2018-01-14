/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
Authentication Button = Button to login / logout
*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-native';
import { NavigationActions } from 'react-navigation';
//Screen names
import { LoginScreen, MainScreen, ProfileScreen } from '../screenNames';
import { LOGIN_ACTION, LOGOUT_ACTION } from '../actions/actionTypes';

class AuthButtonComponent extends Component {
    render() {
        const { logout, loginScreen, isLoggedIn } = this.props;
        return (
            <Button
                title={isLoggedIn ? 'Log Out' : 'Login'}
                onPress={isLoggedIn ? logout : loginScreen}
            />);
    }
}
const mapStateToProps = state => ({
    isLoggedIn: state.auth.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch({ type: LOGOUT_ACTION }),
    loginScreen: () =>
        dispatch(NavigationActions.navigate({ routeName: LoginScreen })),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthButtonComponent);