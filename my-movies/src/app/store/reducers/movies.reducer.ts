import {Movie} from '../../core/models/movie.model';
import * as fromMovies from '../actions/movies.action';

export interface MoviesState {
    data: Movie[];
}

export const initialState: MoviesState = { data: [] };

export function reducer(state = initialState, action: fromMovies.Actions): MoviesState{
    switch(action.type){
        case fromMovies.LOAD_MOVIES: 
            return {
                ...state, action.
            }
        
    }

    return state;
}