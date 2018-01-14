/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
This wizard contains 3 pages, this is the second page
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

const SecondPage = props => {
    const { previousPage, handleSubmit } = props;
    return (
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', width: 200, textAlign: 'center', margin: 10 }}>Redux-form example</Text>
            <Text>This is second Page</Text>
            <Field name="email" keyboardType="email-address" label="Email: " placeholder="Enter email" component={renderField}
            />
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={previousPage} style={{ margin: 10, alignItems: 'center' }}>
                    <Text style={{
                        backgroundColor: 'steelblue', color: 'white', fontSize: 16,
                        height: 37, width: 120, textAlign: 'center', padding: 10
                    }}>Back page -></Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleSubmit} style={{ margin: 10, alignItems: 'center' }}>
                    <Text style={{
                        backgroundColor: 'steelblue', color: 'white', fontSize: 16,
                        height: 37, width: 120, textAlign: 'center', padding: 10
                    }}>Next page -></Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}
export default reduxForm({
    form: ContactFormName, //same form name
    destroyOnUnmount: false, //preserve form data
    forceUnregisterOnUnmount: false, 
    validate,
})(SecondPage);

