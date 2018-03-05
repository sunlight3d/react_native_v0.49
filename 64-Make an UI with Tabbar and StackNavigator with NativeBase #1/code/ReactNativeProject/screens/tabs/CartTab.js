/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
*/
import React, { Component } from 'react';
import { Container, Text, Content, Icon } from 'native-base';

export default class CartTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => {
            return <Icon name="ios-cart-outline" style={{ color: tintColor }} />
        }
    }
    //ios-home-outline, ios-planet-outline, , 
    render() {
        return (<Container>
            <Content>
                <Text>
                    This is CartTab
                </Text>
            </Content>
        </Container>);
    }
}