/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
rootSaga => to manage other sagas
*/
//Saga effects
import { call, all } from 'redux-saga/effects';
import { watchFetchMovies } from './movieSagas';

export default function* rootSaga() {
    yield call(watchFetchMovies);              
}