/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
Navigation reducer
*/
import { LOGIN_ACTION, LOGOUT_ACTION } from '../actions/actionTypes';

import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../containers/AppNavigatorContainer';
// Start with two routes: The Main screen, with the Login screen on top.
//Screen names
import { LoginScreen, MainScreen, ProfileScreen } from '../screenNames';

const mainAction = AppNavigator.router.getActionForPathAndParams(MainScreen);
console.log(`mainAction = ${mainAction}`);
const tempNavState = AppNavigator.router.getStateForAction(mainAction);
const loginAction = AppNavigator.router.getActionForPathAndParams(LoginScreen);
const initialNavState = AppNavigator.router.getStateForAction(
    loginAction,
    tempNavState
);

navigateReducer = (state = initialNavState, action) => {    
    switch (action.type) {
        case LOGIN_ACTION:
            return AppNavigator.router.getStateForAction(
                NavigationActions.back(),
                state
            );
            break;
        case LOGOUT_ACTION:
            return AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: LoginScreen }),
                state
            );
            break;
        default:
            return AppNavigator.router.getStateForAction(action, state);
            break;
    }    
    return state;
}
export default navigateReducer;