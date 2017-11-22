/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
An example of Firebase
*/
import React, { Component } from 'react';
import {
    AppRegistry, FlatList, StyleSheet, Text, View, Image, Alert,
    Platform, TouchableHighlight, Dimensions,
    TextInput
} from 'react-native';
import firebase from 'react-native-firebase';

import { AccessToken, LoginManager, LoginButton } from 'react-native-fbsdk';
import { GoogleSignin } from 'react-native-google-signin';

import Button from 'react-native-button';

export default class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.unsubscriber = null;
        this.state = {
            isAuthenticated: false,
            typedEmail: '',
            typedPassword: '',
            user: null,
        };
    }
    componentDidMount() {
        this.unsubscriber = firebase.auth().onAuthStateChanged((changedUser) => {
            // console.log(`changed User : ${JSON.stringify(changedUser.toJSON())}`);
            this.setState({ user: changedUser });
        });
        GoogleSignin.configure({
            iosClientId: '229179779783-alshugqcnnbqt6tj454l0d882ibqm29v.apps.googleusercontent.com', // only for iOS
        })
        .then(() => {
            // you can now call currentUserAsync()
        });
    }
    componentWillUnmount() {
        if (this.unsubscriber) {
            this.unsubscriber();
        }
    }
    onAnonymousLogin = () => {
        firebase.auth().signInAnonymously()
            .then(() => {
                console.log(`Login successfully`);
                this.setState({
                    isAuthenticated: true,
                });
            })
            .catch((error) => {
                console.log(`Login failed. Error = ${error}`);
            });
    }
    onRegister = () => {
        firebase.auth().createUserWithEmailAndPassword(this.state.typedEmail, this.state.typedPassword)
            .then((loggedInUser) => {
                this.setState({ user: loggedInUser })
                console.log(`Register with user : ${JSON.stringify(loggedInUser.toJSON())}`);
            }).catch((error) => {
                console.log(`Register fail with error: ${error}`);
            });
    }
    onLogin = () => {
        firebase.auth().signInWithEmailAndPassword(this.state.typedEmail, this.state.typedPassword)
            .then((loggedInUser) => {
                console.log(`Login with user : ${JSON.stringify(loggedInUser.toJSON())}`);
            }).catch((error) => {
                console.log(`Login fail with error: ${error}`);
            });
    }
    onLoginFacebook = () => {
        LoginManager
            .logInWithReadPermissions(['public_profile', 'email'])
            .then((result) => {
                if (result.isCancelled) {
                    return Promise.reject(new Error('The user cancelled the request'));
                }
                console.log(`Login success with permissions: ${result.grantedPermissions.toString()}`);
                // get the access token
                return AccessToken.getCurrentAccessToken();
            })
            .then(data => {
                const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);
                return firebase.auth().signInWithCredential(credential);
            })
            .then((currentUser) => {
                console.log(`Facebook Login with user : ${JSON.stringify(currentUser.toJSON())}`);
            })
            .catch((error) => {
                console.log(`Facebook login fail with error: ${error}`);
            });
    }
    onLoginGoogle = () => {
        GoogleSignin
            .signIn()
            .then((data) => {
                // create a new firebase credential with the token
                const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken);
                // login with credential
                return firebase.auth().signInWithCredential(credential);
            })
            .then((currentUser) => {
                console.log(`Google Login with user : ${JSON.stringify(currentUser.toJSON())}`);
            })
            .catch((error) => {
                console.log(`Login fail with error: ${error}`);
            });
    }

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    backgroundColor: 'white',
                    borderRadius: Platform.OS === 'ios' ? 30 : 0,
                }}
            >
                <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    margin: 40
                }}>Login with Firebase </Text>
                <Button containerStyle={{
                    padding: 10,
                    borderRadius: 4,
                    backgroundColor: 'rgb(226,161,184)'
                }}
                    style={{ fontSize: 18, color: 'white' }}
                    onPress={this.onAnonymousLogin}
                >Login anonymous</Button>
                <Text style={{ margin: 20, fontSize: 15, }}>{this.state.isAuthenticated == true ? 'Logged in anonymous' : ''}</Text>
                <TextInput style={{
                    height: 40,
                    width: 200,
                    margin: 10,
                    padding: 10,
                    borderColor: 'gray',
                    borderWidth: 1,
                    color: 'black'
                }}
                    keyboardType='email-address'
                    placeholder='Enter your email'
                    autoCapitalize='none'
                    onChangeText={
                        (text) => {
                            this.setState({ typedEmail: text });
                        }
                    }
                />
                <TextInput
                    style={{
                        height: 40,
                        width: 200,
                        margin: 10,
                        padding: 10,
                        borderColor: 'gray',
                        borderWidth: 1,
                        color: 'black'
                    }}
                    keyboardType='default'
                    placeholder='Enter your password'
                    secureTextEntry={true}
                    onChangeText={
                        (text) => {
                            this.setState({ typedPassword: text });
                        }
                    }
                />

                <View style={{ flexDirection: 'row' }}>
                    <Button containerStyle={{
                        padding: 10,
                        borderRadius: 4,
                        margin: 10,
                        backgroundColor: 'green'
                    }}
                        style={{ fontSize: 17, color: 'white' }}
                        onPress={this.onRegister}
                    >Register</Button>
                    <Button containerStyle={{
                        padding: 10,
                        margin: 10,
                        borderRadius: 4,
                        backgroundColor: 'blue'
                    }}
                        style={{ fontSize: 17, color: 'white' }}
                        onPress={this.onLogin}
                    >Login</Button>
                </View>
                <Button containerStyle={{
                    padding: 10,
                    width: 150,
                    margin: 20,
                    borderRadius: 4,
                    backgroundColor: 'rgb(73,104,173)'
                }}
                    style={{ fontSize: 18, color: 'white' }}
                    onPress={this.onLoginFacebook}
                >Login Facebook</Button>
                <Button containerStyle={{
                    padding: 10,
                    width: 150,
                    margin: 20,
                    borderRadius: 4,
                    backgroundColor: 'rgb(204,84,65)'
                }}
                    style={{ fontSize: 18, color: 'white' }}
                    onPress={this.onLoginGoogle}
                >Login Google</Button>
            </View>
        );
    }
}