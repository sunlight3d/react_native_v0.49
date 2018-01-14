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

const submit = values => {
    alert(`Validation success. Values = ${JSON.stringify(values)}`);
}
const ThirdPage = props => {
    const { handleSubmit, previousPage, submitting } = props;
    return (
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', width: 200, textAlign: 'center', margin: 10 }}>Redux-form example</Text>
            <Text>This is first Page</Text>
            <Field name="age" keyboardType="numeric" label="Age:" placeholder="Age" component={renderField}
            />            
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={previousPage} style={{ margin: 10, alignItems: 'center' }}>
                    <Text style={{
                        backgroundColor: 'steelblue', color: 'white', fontSize: 16,
                        height: 37, width: 120, textAlign: 'center', padding: 10
                    }}>Back page -></Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleSubmit(submit)} style={{ margin: 10, alignItems: 'center' }}
                    disabled={submitting}
                >
                    <Text style={{
                        backgroundColor: 'steelblue', color: 'white', fontSize: 16,
                        height: 37, width: 120, textAlign: 'center', padding: 10
                    }}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
export default reduxForm({
    form: ContactFormName, //same form name
    destroyOnUnmount: false, //preserve form data
    forceUnregisterOnUnmount: true, //unregister fields on unmount
    validate,
})(ThirdPage);

