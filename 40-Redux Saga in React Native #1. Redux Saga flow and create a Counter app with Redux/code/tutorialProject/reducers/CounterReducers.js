/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
Reducers for actions : decrementAction, incrementAction
*/
import { DECREMENT, INCREMENT } from '../actions/actionTypes';

const counterReducers = (times = 0, action) => {
    switch (action.type) {
        case INCREMENT:
            return ++times;
        case DECREMENT:
            return --times;
            
        default:
            return times; //state does not change
    }
}

export default counterReducers;