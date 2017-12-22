/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
rootSaga => to manage other sagas
*/
//Saga effects
import { fork } from 'redux-saga/effects';
import { watchFetchMovies } from './movieSagas';
//Add movie
import { watchAddNewMovie, watchUpdateMovie } from './movieSagas';

export default function* rootSaga() {
    yield [
        fork(watchFetchMovies),
        fork(watchAddNewMovie),
        fork(watchUpdateMovie)
    ];
}