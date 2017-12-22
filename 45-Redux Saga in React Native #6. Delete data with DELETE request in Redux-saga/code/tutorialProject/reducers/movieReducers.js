/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
Reducers for actions 
*/
import {
    ADD_MOVIE, FETCH_MOVIES, FETCH_SUCCEEDED, FETCH_FAILED,
    UPDATE_MOVIE, UPDATE_SUCCEEDED,
    DELETE_MOVIE, DELETE_SUCCEEDED
} from '../actions/actionTypes';

const movieReducers = (movies = [], action) => {
    switch (action.type) {
        case FETCH_SUCCEEDED:
            return action.receivedMovies;
        case FETCH_FAILED:
            return [];
        // case ADD_MOVIE:
        //     return [
        //         ...movies,
        //         action.newMovie
        //     ];

        // case UPDATE_MOVIE:
        //     return movies; //do nothing
        case UPDATE_SUCCEEDED:            
        return movies.map(eachMovie =>
            (eachMovie.id.toString() === action.updatedMovie.id)
                ? { ...eachMovie, 
                    name: action.updatedMovie.name, 
                    releaseYear: action.updatedMovie.releaseYear
                }
                : eachMovie
            )
        case DELETE_SUCCEEDED:
            const filteredMovies = movies.filter(eachMovie => {                
                return eachMovie.id.toString() !== action.deletedMovieId.toString();
            });
            return filteredMovies;
        default:
            return movies; //state does not change
    }
}

export default movieReducers;