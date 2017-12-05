/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
TaskListComponent to show list of Tasks
*/
import React, { Component } from 'react';
import {
    AppRegistry, FlatList,
    StyleSheet, Text, View, Image, Alert, Platform,
    TouchableHighlight,
    RefreshControl, TextInput
} from 'react-native';
import TaskItemContainer from '../containers/TaskItemContainer';

export default class TaskListComponent extends Component {
    render() {
        return (<FlatList
            data={this.props.tasks}
            renderItem={({ item, index }) => {
                return (
                    <TaskItemContainer {...item}>

                    </TaskItemContainer>
                );
            }}
            keyExtractor={(item, index) => item.taskName}
        >
        </FlatList>);
    }
};