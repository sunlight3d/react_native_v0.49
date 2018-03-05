/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
*/
import React, { Component } from 'react';
import { Container, Text, Content, Icon } from 'native-base';

export default class HomeTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => {
            return <Icon name='ios-home-outline' style={{ color: tintColor }} />
        }
    }    
    render() {
        return (<Container>
            <Content>
                <Text>
                    This is HomeTab
                </Text>
            </Content>
        </Container>);
    }
}