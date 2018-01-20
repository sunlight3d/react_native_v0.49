/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
TodoListComponent = "TodoList Screen"
*/
import React, { Component } from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet, Alert, TextInput } from 'react-native';
import { updateTodoList, deleteTodoList, queryAllTodoLists,
        filterTodoLists, insertTodos2TodoList, getTodosFromTodoListId } from '../databases/allSchemas';
import realm from '../databases/allSchemas';
import Swipeout from 'react-native-swipeout';

import HeaderComponent from './HeaderComponent';
import PopupDialogComponent from './PopupDialogComponent';
//sort 
import { SORT_ASCENDING, SORT_DESCENDING } from './sortStates';
let FlatListItem = props => {
    const { itemIndex, id, name, creationDate, popupDialogComponent, onPressItem } = props;
    showEditModal = () => {
        popupDialogComponent.showDialogComponentForUpdate({
            id, name
        });
    }
    showDeleteConfirmation = () => {
        Alert.alert(
            'Delete',
            'Delete a todoList',
            [
                {
                    text: 'No', onPress: () => { },//Do nothing
                    style: 'cancel'
                },
                {
                    text: 'Yes', onPress: () => {
                        deleteTodoList(id).then().catch(error => {
                            alert(`Failed to delete todoList with id = ${id}, error=${error}`);
                        });
                    }
                },
            ],
            { cancelable: true }
        );
    };
    return (
        <Swipeout right={[
            {
                text: 'Edit',
                backgroundColor: 'rgb(81,134,237)',
                onPress: showEditModal
            },
            {
                text: 'Delete',
                backgroundColor: 'rgb(217, 80, 64)',
                onPress: showDeleteConfirmation
            }
        ]} autoClose={true}>
            <TouchableOpacity onPress={onPressItem}>
                <View style={{ backgroundColor: itemIndex % 2 == 0 ? 'powderblue' : 'skyblue' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18, margin: 10 }}>{name}</Text>
                    <Text style={{ fontSize: 18, margin: 10 }} numberOfLines={2}>{creationDate.toLocaleString()}</Text>
                </View>
            </TouchableOpacity>
        </Swipeout >
    );
}
export default class TodoListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sortState: SORT_ASCENDING,
            todoLists: [],
            searchedName:''
        };
        this.reloadData();
        realm.addListener('change', () => {
            this.reloadData();
        });
    }
    sort = () => {
        this.setState({ 
            sortState: this.state.sortState === SORT_ASCENDING ? SORT_DESCENDING : SORT_ASCENDING,
            todoLists: this.state.todoLists.sorted("name", this.state.sortState === SORT_DESCENDING ? true : false)
        });

    }
    reloadData = () => {
        queryAllTodoLists().then((todoLists) => {
            this.setState({ todoLists });
        }).catch((error) => {
            this.setState({ todoLists: [] });
        });
        console.log(`reloadData`);
    }
    render() {
        return (<View style={styles.container}>
            <HeaderComponent title={"Todo List"}
                hasAddButton={true}
                hasDeleteAllButton={true}
                showAddTodoList={
                    () => {
                        this.refs.popupDialogComponent.showDialogComponentForAdd();
                    }
                }
                hasSortButton={true}
                sort={this.sort} 
                sortState={this.state.sortState}
            />
            <TextInput style={styles.textInput} placeholder="Enter text to search" autoCorrect={false}
                onChangeText={(text) => {
                    this.setState({ searchedName: text });
                    filterTodoLists(text).then(filteredTodoLists => {
                        this.setState({ todoLists: filteredTodoLists });
                    }).catch(error => {
                        this.setState({ todoLists: [] });
                    });
                }} 
                value={this.state.searchedName}
            />
            <FlatList
                style={styles.flatList}
                data={this.state.todoLists}
                renderItem={({ item, index }) => <FlatListItem {...item} itemIndex={index}
                    popupDialogComponent={this.refs.popupDialogComponent}
                    onPressItem={() => {
                        // alert(`You pressed item `);
                        /*
                        insertTodos2TodoList(item.id, [
                            {
                                id: 1,
                                name: "Make Angular tutorials in http module",
                                done: false
                            },
                            {
                             id: 2,
                             name: "Make React Native tutorials in Realm",
                             done: true
                            },
                            {
                             id: 3,
                             name: "Make React tutorials in High-Order Component",
                             done: true
                            }
                         ]).then(insertedTodos => {
                             alert(`Added faked Todos: ${JSON.stringify(insertedTodos)}`);     
                         }).catch(error => {
                             alert(`Cannot add faked Todos. Error: ${error}`);     
                         });
                         */
                        getTodosFromTodoListId(item.id).then(insertedTodos => {
                            alert(`Faked Todos: ${JSON.stringify(insertedTodos)}`);     
                        }).catch(error => {
                            alert(`Cannot find faked Todos. Error: ${JSON.stringify(error)}`);     
                        });
                    }} />}
                keyExtractor={item => item.id}
            />
            <PopupDialogComponent ref={"popupDialogComponent"} />
        </View>);
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    flatList: {
        flex: 1,
        flexDirection: 'column',
    },
    textInput: {
        height: 40,
        padding: 10,
        margin: 10,
        borderColor: 'gray',
        borderWidth: 1
    },
});

