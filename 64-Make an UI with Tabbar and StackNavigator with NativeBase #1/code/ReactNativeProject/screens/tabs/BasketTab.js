/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
*/
import React, { Component } from 'react';
import { Container, Text, Content, Icon } from 'native-base';

export default class BasketTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => {
            return <Icon name="md-basket" style={{ color: tintColor }} />
        }
    }
    render() {
        return (<Container>
            <Content>
                <Text>
                    This is BasketTab
                </Text>
            </Content>
        </Container>);
    }
}