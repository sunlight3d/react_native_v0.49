/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
ContactComponent => ContactForm
*/
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
// import submit from '../submit';
//Validate
import validate from '../validate';
import asyncValidate from '../asyncValidate';

const renderField = ({ label, keyboardType,placeholder, meta: { touched, error, warning, asyncValidating }, 
                                                        input: { onChange, ...restInput }}) => {
    return (<View style={{ flexDirection: 'column', height: 70, alignItems: 'flex-start' }}>
        <View style={{ flexDirection: 'row', height: 50, alignItems: 'center' }}>
            <Text style={{ fontSize: 14, fontWeight: 'bold', width: 80 }}>{label}</Text>
            <TextInput style={{ borderColor: 'steelblue', borderWidth: 1, height: 37, width: 220, padding: 5 }}
                keyboardType={keyboardType} onChangeText={onChange} {...restInput} placeholder={placeholder} autoCapitalize='none'
            >
            </TextInput>
        </View>
        {touched && ((error && <Text style={{ color: 'red' }}>{error}</Text>) ||
                (warning && <Text style={{ color: 'orange' }}>{warning}</Text>) ||
                (asyncValidating && <Text style={{ color: 'orange' }}>Validating...</Text>))} 
    </View>);
};
const submit = values => {
    alert(`Validation success. Values = ~${JSON.stringify(values)}`);    
}
const ContactComponent = props => {
    const { handleSubmit, submitting, reset } = props;
    console.log(`submitting = ${submitting}`);
    return (
        <View style={{ flex: 1, flexDirection: 'column', margin: 40, justifyContent: 'flex-start', }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', width: 200, textAlign: 'center', margin: 10 }}>Redux-form example</Text>
            <Text>username: must be hoang, hoangnd, or ndhoang</Text>
            <Text>email: must be sunlight4d@gmail.com</Text>
            <Field name="username" keyboardType="default" label="Username: " placeholder="Enter name" component={renderField}                 
            />
            <Field name="email" keyboardType="email-address" label="Email: " placeholder="Enter email" component={renderField}                 
            />
            <Field name="age" keyboardType="numeric" label="Age: " placeholder="Enter age" component={renderField}                 
            />

            <TouchableOpacity onPress={handleSubmit(submit)} style={{ margin: 10, alignItems: 'center' }} disabled={submitting}>
                <Text style={{
                    backgroundColor: 'steelblue', color: 'white', fontSize: 16,
                    height: 37, width: 200, textAlign: 'center', padding: 10
                }}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={reset} style={{ margin: 10, alignItems: 'center' }} disabled={submitting}>
                <Text style={{
                    backgroundColor: 'powderblue', color: 'black', fontSize: 16,
                    height: 37, width: 200, textAlign: 'center', padding: 10
                }}>Clear</Text>
            </TouchableOpacity>
        </View>
    );
}
const ContactForm = reduxForm({
    form: 'contact', // a unique identifier for this form        
    validate,
    asyncValidate,
    asyncBlurFields: ['username'],
})(ContactComponent);

export default ContactForm;
