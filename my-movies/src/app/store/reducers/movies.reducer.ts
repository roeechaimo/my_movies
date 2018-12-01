import {Movie} from '../../core/models/movie.model';
import * as fromMovies from '../actions/movies.action';

export interface MoviesState {
    movies: Movie[];
    isLoading: boolean;
    error: any;
}

export const initialState: MoviesState = {
     movies: [], 
     isLoading: false, 
     error: null, 
    };

export function reducer(state = initialState, action: fromMovies.Actions): MoviesState{
    switch(action.type){
        case fromMovies.LOAD_MOVIES: {
            return {
                 ...state,
                isLoading: true
            };
        }

        case fromMovies.LOAD_MOVIES_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                movies: action.payload
            };
        }

        case fromMovies.LOAD_MOVIES_FAIL: {
            return {
                ...state,
                isLoading: false,
                error: action.payload 
            };
        }
    }

    return state;
}

export const getMovies = (state: MoviesState) => state.movies;
export const getIsLoading = (state: MoviesState) => state.isLoading;