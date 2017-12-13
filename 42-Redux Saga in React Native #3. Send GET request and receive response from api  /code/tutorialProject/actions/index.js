/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
Redux in React Native - Action Creators
*/
import { ADD_MOVIE, FETCH_MOVIES, FETCH_SUCCEEDED, FETCH_FAILED } from './actionTypes';

//Action: "increase counter "
export const addMovieAction = (newMovie) => {
    return {
        type: ADD_MOVIE,
        newMovie: newMovie
    }
}

export const fetchMoviesAction = (sort) => {
    return {
        type: FETCH_MOVIES,
        sort
    }
}
//Action sent by Redux-saga
export const fetchSuccessAction = (receivedMovies) => {
    return {
        type: FETCH_SUCCEEDED,
        receivedMovies
    }
}


