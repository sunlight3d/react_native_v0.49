/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
Create a Todo app with Firebase Firestore
*/
import React, { Component } from 'react';
import { AppRegistry, FlatList, 
    StyleSheet, Text, View, Image, Alert, Platform, 
    TouchableHighlight, 
    RefreshControl, TextInput } from 'react-native';
import firebase from 'react-native-firebase';

export default class TotoComponent extends Component {
    constructor(props) {
        super(props);   
        this.state = ({
            todoTasks: [],
            newTaskName: '',
            loading: false,           
        });     
        this.ref = firebase.firestore().collection('todoTasks');
    }
    componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot((querySnapshot) => {
            const todos = [];
            querySnapshot.forEach((doc) => {
                todos.push({
                    taskName: doc.data().taskName
                });
            });
            this.setState({
                todoTasks: todos.sort((a, b) => {
                    return (a.taskName < b.taskName);
                }),
                loading: false,
            });
        });
    }
    onPressAdd = () => {
        if(this.state.newTaskName.trim() === '') {
            alert('task name is blank');
            return;
        }
        this.ref.add({
            taskName: this.state.newTaskName
        }).then((data) => {
            console.log(`added data = ${data}`);
            this.setState({
                newTaskName: '',
                loading: true
            });
        }).catch((error) => {
            console.log(`error adding Firestore document = ${error}`);
            this.setState({
                newTaskName: '',
                loading: true
            });
        });
    }
    render() {
        return (
            <View style={{ flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 0 }}>
                <View style={{
                    backgroundColor: 'tomato',
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
                        placeholder='Enter task name'
                        autoCapitalize='none'
                        onChangeText={
                            (text) => {
                                this.setState({ newTaskName: text });
                            }
                        }
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
                    data={this.state.todoTasks}
                    renderItem={({ item, index }) => {
                        return (
                            <Text style={{
                                fontSize: 20,
                                fontWeight: 'bold',                                
                                margin: 40
                            }}>{item.taskName}</Text>);
                    }}     
                    keyExtractor={(item, index) => item.taskName}               
                >
                </FlatList>
            </View>
        );
    }
}