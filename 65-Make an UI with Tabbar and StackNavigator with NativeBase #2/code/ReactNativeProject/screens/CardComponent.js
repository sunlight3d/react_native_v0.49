/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Youtube channel for programming tutorials
*/
import React, { Component } from 'react';
import {
    Container, Icon, Text, Content,
    Card, CardItem, Thumbnail, Body, Left, Right,
    Button
} from 'native-base';
import { Image } from 'react-native'
export default class CardComponent extends Component {
    render() {
        return <Card>
            <CardItem>
                <Left>
                    {/* <Thumbnail source={require('../images/profile1.jpg')} /> */}
                    <Thumbnail source={this.props.profileImage} />
                    <Body>
                        <Text>This is my profile</Text>        
                        <Text note>23 February, 2018</Text>                                
                    </Body>
                </Left>
            </CardItem>
            <CardItem cardBody>
                {/* <Image source={require('../images/1.jpg')} 
                    style={{ height: 200, width: null, flex: 1 }}
                /> */}
                <Image source={this.props.bodyImage}
                    style={{ height: 200, width: null, flex: 1 }}
                />

            </CardItem>
            <CardItem style={{ height: 45 }}>
                <Left>
                    <Button transparent>
                        <Icon name="ios-heart-outline"
                            style={{ color: 'black' }} />
                    </Button>
                    <Button transparent>
                        <Icon name="ios-chatbubbles-outline"
                            style={{ color: 'black' }} />
                    </Button>
                    <Button transparent>
                        <Icon name="ios-send-outline"
                            style={{ color: 'black' }} />
                    </Button>
                </Left>
            </CardItem>
            <CardItem style={{ height: 30 }}>
                <Text>1000 likes</Text>
            </CardItem>
            <CardItem>
                <Body>
                    <Text>
                        I am <Text style={{ fontWeight: 'bold' }}>Nguyen Duc Hoang</Text>, I live in Hanoi, Vietnam.
I create this channel which contains videos in Swift programming language, python, NodeJS, Angular, Typescript,  ReactJS, React Native, ios and android programming, Kotlin programming, new technologies' overviews. These videos will help people learn latest programming language and software framework. They will be also very useful for their work or business.
My channel's languages are English and Vietnamese. Contents are updated continuously.
Thank you very much and hope to receive many advices for better next videos
                    </Text>
                </Body>
            </CardItem>
        </Card>
    }
}