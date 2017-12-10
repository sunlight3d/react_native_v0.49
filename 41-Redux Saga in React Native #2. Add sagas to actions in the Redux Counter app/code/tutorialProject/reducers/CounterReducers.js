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
            return times + action.step;
        case DECREMENT:
            return times - action.step;
            
        default:
            return times; //state does not change
    }
}

export default counterReducers;