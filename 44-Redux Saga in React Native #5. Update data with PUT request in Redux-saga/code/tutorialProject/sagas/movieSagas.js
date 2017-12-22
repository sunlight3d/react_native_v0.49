/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
Create some sagas for FETCH_MOVIES, FETCH_SUCCEEDED, FETCH_FAILED
*/
import { 
    FETCH_MOVIES, FETCH_SUCCEEDED, FETCH_FAILED, ADD_MOVIE,
    UPDATE_MOVIE, UPDATE_SUCCEEDED
 } from '../actions/actionTypes';
//Saga effects
import { put, takeLatest } from 'redux-saga/effects';
import { Api } from './Api';

function* fetchMovies() {
    try {
        const receivedMovies = yield Api.getMoviesFromApi();   
        yield put({ type: FETCH_SUCCEEDED, receivedMovies: receivedMovies });     
    } catch (error) {        
        yield put({ type: FETCH_FAILED, error });
    }
}
export function* watchFetchMovies() { 
    yield takeLatest(FETCH_MOVIES, fetchMovies);
}
//Add new movie
function* addNewMovie(action) {            
    try {
        const result = yield Api.insertNewMovieFromApi(action.newMovie);
        if (result === true) {
            yield put({ type: FETCH_MOVIES, sort: 'desc'});     
        }
    } catch (error) {        
        //do nothing
    }
}
export function* watchAddNewMovie() {            
    yield takeLatest(ADD_MOVIE, addNewMovie);
}
//Update a movie
function* updateMovie(action) {            
    try {
        // console.log(`ssd123`);
        const result = yield Api.updateMovieFromApi(action.updatedMovie);        
        if (result === true) {
            yield put({ type: UPDATE_SUCCEEDED, updatedMovie: action.updatedMovie });     
        }
    } catch (error) {        
        //do nothing
    }
}
export function* watchUpdateMovie() {            
    yield takeLatest(UPDATE_MOVIE, updateMovie);
}
