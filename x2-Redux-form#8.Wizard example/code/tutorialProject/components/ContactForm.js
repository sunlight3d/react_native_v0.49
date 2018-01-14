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
//Pages
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
//Form name
import { ContactFormName } from '../FormNames';

class ContactComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageIndex: 0,
        };
    }
    nextPage = () => {
        if (this.state.pageIndex >= 2) {
            return;
        }
        this.setState({ pageIndex: this.state.pageIndex + 1 });
    }

    previousPage = () => {
        if (this.state.pageIndex <= 0) {
            return;
        }
        this.setState({ pageIndex: this.state.pageIndex - 1 });
    }
    render() {
        const { pageIndex, onSubmit } = this.state;

        return (
            <View style={{ flex: 1, margin: 40, justifyContent: 'flex-start' }}>
                {pageIndex === 0 && <FirstPage handleSubmit={this.nextPage} />}
                {pageIndex === 1 &&
                    <SecondPage
                        previousPage={this.previousPage}
                        handleSubmit={this.nextPage}
                    />}
                {pageIndex === 2 &&
                    <ThirdPage
                        previousPage={this.previousPage}
                        handleSubmit={onSubmit}
                    />}
            </View>
        );
    }
}

const ContactForm = reduxForm({
    form: ContactFormName
})(ContactComponent);

export default ContactForm;
