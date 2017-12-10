/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
Redux in React Native - Action Creators
*/
import { INCREMENT, DECREMENT } from './actionTypes';

//Action: "increase counter "
export const increaseAction = (step) => {
    return {
        type: INCREMENT,
        step: step
    }
}
//Action: "decrease counter "
export const decreaseAction = (step) => {
    return {
        type: DECREMENT,
        step: step
    }
}