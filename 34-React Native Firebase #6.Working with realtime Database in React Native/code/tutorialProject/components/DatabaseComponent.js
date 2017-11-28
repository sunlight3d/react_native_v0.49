/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
Realtime Database in React Native 
*/
import React, { Component } from 'react';
import {
    AppRegistry, FlatList,
    StyleSheet, Text, View, Image, Alert, Platform,
    TouchableHighlight,
    RefreshControl, TextInput
} from 'react-native';

import firebase from 'react-native-firebase';
// pluck values from your `GoogleService-Info.plist` you created on the firebase console
const iosConfig = {
    clientId: '229179779783-alshugqcnnbqt6tj454l0d882ibqm29v.apps.googleusercontent.com',
    appId: '1:229179779783:ios:af9d85f0eb71ed94',
    apiKey: 'AIzaSyBQO4xpWMeck7LI-uhFOHN3x-EfcaeryRQ',
    databaseURL: 'https://reactnativefirebasetutor-f9c54.firebaseio.com',
    storageBucket: 'reactnativefirebasetutor-f9c54.appspot.com',
    messagingSenderId: '229179779783',
    projectId: 'reactnativefirebasetutor-f9c54',
    // enable persistence by adding the below flag
    // persistence: true,
};

// pluck values from your `google-services.json` file you created on the firebase console
const androidConfig = {
    clientId: '229179779783-9r418qo0l23s4g9flmfi04tnv57lji9f.apps.googleusercontent.com',
    appId: '1:229179779783:android:9e3f3af6f89eb918',
    apiKey: 'AIzaSyDjo1LNjjfX2AmcVuna8cAOwthLcYx59vk',
    databaseURL: 'https://reactnativefirebasetutor-f9c54.firebaseio.com',
    storageBucket: 'reactnativefirebasetutor-f9c54.appspot.com',
    messagingSenderId: '229179779783',
    projectId: 'reactnativefirebasetutor-f9c54',
    // enable persistence by adding the below flag
    // persistence: true,
};
const animalApp = firebase.initializeApp(
    // use platform specific firebase config
    Platform.OS === 'ios' ? iosConfig : androidConfig,
    // name of this app
    'animalApp'
);
const rootRef = firebase.database().ref();
const animalRef = rootRef.child('animals');
export default class DatabaseComponent extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            animals: [],
            newAnimalName: '',
            loading: false,
        });
    }
    componentDidMount() {
        animalRef.on('value', (childSnapshot) => {
            const animals = [];
            childSnapshot.forEach((doc) => {
                animals.push({
                    key: doc.key,
                    animalName: doc.toJSON().animalName
                });
                this.setState({
                    animals: animals.sort((a, b) => {
                        return (a.animalName < b.animalName);
                    }),
                    loading: false,
                });
            });
        });
    }
    onPressAdd = () => {
        if (this.state.newAnimalName.trim() === '') {
            alert('Animal name is blank');
            return;
        }
        animalRef.push({
            animalName: this.state.newAnimalName
        });
    }
    render() {
        return (
            <View style={{ flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 0 }}>
                <View style={{
                    backgroundColor: 'green',
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    height: 64
                }}>
                    <TextInput style={{
                        height: 40,
                        width: 200,
                        margin: 10,
                        padding: 10,
                        borderColor: 'white',
                        borderWidth: 1,
                        color: 'white'
                    }}
                        keyboardType='default'
                        placeholderTextColor='white'
                        placeholder='Enter animal name'
                        autoCapitalize='none'
                        onChangeText={
                            (text) => {
                                this.setState({ newAnimalName: text });
                            }
                        }
                        value={this.state.newAnimalName}
                    />
                    <TouchableHighlight
                        style={{ marginRight: 10 }}
                        underlayColor='tomato'
                        onPress={this.onPressAdd}
                    >
                        <Image
                            style={{ width: 35, height: 35 }}
                            source={require('../icons/icons-add.png')}
                        />
                    </TouchableHighlight>
                </View>
                <FlatList
                    data={this.state.animals}
                    renderItem={({ item, index }) => {
                        return (
                            <Text style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                margin: 10
                            }}>{item.animalName}</Text>);
                    }}
                >
                </FlatList>
            </View>
        );
    }
}