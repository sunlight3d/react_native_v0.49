/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
Send GET / POST api requests to server
*/
const urlGetMovies = 'http://localhost:3000/movies';
const urlPostMovies = 'http://localhost:3000/movies';
const urlUpdateMovie = 'http://localhost:3000/movies';

function* getMoviesFromApi() {
    const response = yield fetch(urlGetMovies, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: '',
    });
    const movies = yield response.status === 200 ? JSON.parse(response._bodyInit): []       
    return movies;
}

//send POST request to add new Movie
function* insertNewMovieFromApi(newMovie) {
    const response = yield fetch(urlPostMovies, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: newMovie.name,
            releaseYear: newMovie.releaseYear,
        }),
    });
    yield console.log(`response = ${JSON.stringify(response)}`); 
    return yield (response.status === 201);//true or false
}
//send PUT request to update existing Movie
function* updateMovieFromApi(updatedMovie) {
    const urlLink = `${urlUpdateMovie}/${updatedMovie.id.toString()}`;    
    const response = yield fetch(urlLink, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: updatedMovie.name,
            releaseYear: updatedMovie.releaseYear,    
        }),
    });    
    return yield (response.status === 200);//true or false
}
export const Api = {
    getMoviesFromApi,
    insertNewMovieFromApi,
    updateMovieFromApi
}; 