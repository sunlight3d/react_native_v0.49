/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
rootSaga => to manage other sagas
*/
//Saga effects
import { delay } from 'redux-saga';
import { all } from 'redux-saga/effects';

import { sayHello } from './counterSagas';
import { watchIncrement, watchDecrement } from './counterSagas';

export default function* rootSaga() {
    yield all([
        sayHello,
        watchIncrement(), 
        watchDecrement(), 
    ]);
}