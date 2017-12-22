/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
This file binds all reducers 
*/
import { combineReducers } from 'redux';
import movieReducers from './movieReducers';

const allReducers = combineReducers({
    movieReducers,
    //you can add more reducers here, separated by , !
});
export default allReducers;