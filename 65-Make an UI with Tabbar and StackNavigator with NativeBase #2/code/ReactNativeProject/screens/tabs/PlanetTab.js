/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
An youtube channel of software programming
*/
import React, { Component } from 'react';
import { Container, Text, Content, Icon } from 'native-base';

export default class PlanetTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => {
            return <Icon name="ios-planet-outline" style={{ color: tintColor }} />
        }
    }
    render() {
        return (<Container>
            <Content>
                <Text>
                    This is PlanetTab
                </Text>
            </Content>
        </Container>);
    }
}