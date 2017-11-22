/**
 * Created by hoangnd on 7/5/17.
 */
import React from 'react';
import {Text, View, Button, Image} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class SecondScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Screen 2',
        drawerIcon: ({tintColor}) => {
            return (
                <MaterialIcons
                    name="change-history"
                    size={24}
                    style={{color: tintColor}}
                >
                </MaterialIcons>
            );
        }
    }

    render() {
        return <View style={
            {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }
        }>
            <Text style={{fontSize: 30, color: 'blue'}}>
                Screen 2
            </Text>
            <Button
                onPress={() => this.props.navigation.navigate('DrawerOpen')}
                title="Open DrawNavigator"
            />
        </View>
    }
}