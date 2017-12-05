/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
This file binds all reducers 
*/
import { combineReducers } from 'redux';
import taskReducers from './taskReducers';

const allReducers = combineReducers({
    taskReducers,
    //you can add more reducers here, separated by , !
});
export default allReducers;