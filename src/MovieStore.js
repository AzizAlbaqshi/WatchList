import movies from './movies.js';
import {makeAutoObservable} from "mobx";

class MovieStore {
    movies = movies;

    constructor(){
        makeAutoObservable(this);
    }

    deleteMovie = (movieID) => {
        const filtered = this.movies.filter(movie => movie.id !== movieID);
        this.movies = filtered;
    }

    createMovie = (newMovie) => {
        newMovie["id"] = this.movies.length + 1;
        this.movies.push(newMovie);
    }

}

const movieStore = new MovieStore();

export default movieStore;