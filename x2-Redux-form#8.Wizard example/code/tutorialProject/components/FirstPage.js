/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
This wizard contains 3 pages, this is the first page
*/
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
//renderField
import renderField from './renderField';
//Form name
import { ContactFormName } from '../FormNames';
//Validate 
import validate from '../validate';

const FirstPage = props => {
    const { handleSubmit } = props;
    return (
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', width: 200, textAlign: 'center', margin: 10 }}>Redux-form example</Text>
            <Text>This is first Page</Text>            
            <Field name="firstName" keyboardType="default" label="First name: " placeholder="First name" component={renderField}
            />
            <Field name="lastName" keyboardType="default" label="Last name: " placeholder="Last name" component={renderField}
            />
            <TouchableOpacity onPress={handleSubmit} style={{ margin: 10, alignItems: 'center' }}>
                <Text style={{
                    backgroundColor: 'steelblue', color: 'white', fontSize: 16,
                    height: 37, width: 200, textAlign: 'center', padding: 10
                }}>Next page -></Text>
            </TouchableOpacity>
        </View>
    );
}
export default reduxForm({
    form: ContactFormName, //same form name
    destroyOnUnmount: false, //preserve form data
    forceUnregisterOnUnmount: false, //unregister fields on unmount
    validate,
})(FirstPage);

