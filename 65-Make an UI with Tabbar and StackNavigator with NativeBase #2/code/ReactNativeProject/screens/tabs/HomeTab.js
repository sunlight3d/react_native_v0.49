/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
An youtube channel of software programming 
*/
import React, { Component } from 'react';
import { Container, Text, Content, Icon } from 'native-base';
import CardComponent from '../CardComponent';

export default class HomeTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => {
            return <Icon name='ios-home-outline' style={{ color: tintColor }} />
        }
    }    
    render() {
        let images = [
            {
                key: "1",
                profileImage: require('../../images/profile1.jpg'),
                bodyImage: require('../../images/1.jpg'),
            },
            {
                key: "2",
                profileImage: require('../../images/profile2.jpg'),
                bodyImage: require('../../images/2.jpg'),
            },
            {
                key: "3",
                profileImage: require('../../images/profile3.jpg'),
                bodyImage: require('../../images/3.jpg'),
            },
        ];
        return (<Container>
            <Content>
                {/* <CardComponent profileImage={images[1].profileImage}
                                bodyImage={images[1].bodyImage}
                />                 */}
                {images.map(eachImage => {
                    return <CardComponent
                        key={eachImage.key}
                        profileImage={eachImage.profileImage}
                        bodyImage={eachImage.bodyImage}
                    />
                })}
            </Content>
        </Container>);
    }
}