/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
Create some sagas for increment / decrement, say hello
*/
import { INCREMENT, DECREMENT} from '../actions/actionTypes';
//Saga effects
import { delay } from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';

export function* sayHello() {
    console.log('Hello world !');
}
function* increment() {
    console.log(`This is increment saga`);
}

export function* watchIncrement() {         
    yield takeEvery(INCREMENT, increment);
}

function* decrement() {
    console.log(`This is decrement saga`);
}

export function* watchDecrement() {     
    //yield put({ type: INCREMENT, step: step });  
    console.log(`watchDecrement saga`);
    yield takeEvery(DECREMENT, decrement);
}