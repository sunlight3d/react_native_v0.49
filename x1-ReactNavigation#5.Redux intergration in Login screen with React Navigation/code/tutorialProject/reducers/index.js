/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
Combine reducers 
*/

import { combineReducers } from 'redux';
import authenticateReducer from './authenticateReducer';
import navigateReducer from './navigateReducer';

const AppReducer = combineReducers({
    authenticateReducer,
    navigateReducer,
});
export default AppReducer;