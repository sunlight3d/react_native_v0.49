/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
An youtube channel of software programming
*/
import React, { Component } from 'react';
import { Container, Text, Content, Icon } from 'native-base';

export default class BookTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => {
            return <Icon name="ios-book-outline" style={{ color: tintColor }} />
        }
    }
    //ios-home-outline, ios-planet-outline, , ios-cart-outline
    render() {
        return (<Container>
            <Content>
                <Text>
                    This is BookTab
                </Text>
            </Content>
        </Container>);
    }
}
