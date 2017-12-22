/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
FlatList Component with Images
Present Modal and update an existing FlatList's Item
*/
import React, { Component } from 'react';
import {
    AppRegistry, FlatList, StyleSheet, Text, View, Image, Alert,
    Platform, TouchableHighlight, Dimensions,
    TextInput
} from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
var screen = Dimensions.get('window');
export default class EditModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            releaseYear: ''
        };
    }
    showEditModal = (item) => {        
        this.setState({   
            id: item.id.toString(),         
            name: item.name,
            releaseYear: item.releaseYear.toString(),            
        });  
        this.refs.myModal.open();      
    }
    render() {
        return (
            <Modal
                ref={"myModal"}
                style={{
                    justifyContent: 'center', borderRadius: Platform.OS === 'ios' ? 30 : 0, shadowRadius: 10,
                    width: screen.width - 80, height: 280
                }}
                position='center'
                backdrop={true}
                onClosed={() => {
                    // alert("Modal closed");
                }}
            >
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 40
                }}>Movie's information</Text>
                <TextInput
                    style={{
                        height: 40,
                        borderBottomColor: 'gray',
                        marginLeft: 30,
                        marginRight: 30,
                        marginTop: 20,
                        marginBottom: 10,
                        borderBottomWidth: 1
                    }}
                    onChangeText={(text) => this.setState({ name: text })}
                    placeholder="Movie's name"
                    value={this.state.name}
                />
                <TextInput
                    style={{
                        height: 40,
                        borderBottomColor: 'gray',
                        marginLeft: 30,
                        marginRight: 30,
                        marginTop: 10,
                        marginBottom: 20,
                        borderBottomWidth: 1
                    }}

                    onChangeText={(text) => this.setState({ releaseYear: text })}
                    placeholder="Year of release"
                    value={this.state.releaseYear}
                />
                <Button
                    style={{ fontSize: 18, color: 'white' }}
                    containerStyle={{
                        padding: 8,
                        marginLeft: 70,
                        marginRight: 70,
                        height: 40,
                        borderRadius: 6,
                        backgroundColor: 'mediumseagreen'
                    }}
                    onPress={() => {
                        if (this.state.name.length == 0 || this.state.releaseYear.length == 0) {
                            alert("You must enter food's name and description");
                            return;
                        }
                        //Update existing Movie => define in Container                        
                        this.props.movieComponent.props.onUpdateItemAction(this.state);
                        this.refs.myModal.close();                        
                    }}>
                    Save
                </Button>

            </Modal>
        );
    }
}