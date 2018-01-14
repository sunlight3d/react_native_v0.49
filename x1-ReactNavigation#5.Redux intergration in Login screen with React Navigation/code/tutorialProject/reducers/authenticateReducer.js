/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
Authentication reducer
*/
import { LOGIN_ACTION, LOGOUT_ACTION } from '../actions/actionTypes';

authenticateReducer = (state = { isLoggedIn: false }, action) => {
    switch (action.type) {
        case LOGIN_ACTION:
            return { ...state, isLoggedIn: true };
        case LOGOUT_ACTION:
            return { ...state, isLoggedIn: false };
        default:
            return state;
    }
};
export default authenticateReducer;
