import { Action } from '@ngrx/store';
import {Movie} from '../../core/models/movie.model';

export const LOAD_MOVIES = '[Movies] Load Movies';
export const LOAD_MOVIES_SUCCESS = '[Movies] Load Movies Success';
export const LOAD_MOVIES_FAIL = '[Movies] Load Movies Fail';

export class LoadMovies implements Action {
    readonly type = LOAD_MOVIES;

    constructor(){}
}

export class LoadMoviesSuccess implements Action {
    readonly type = LOAD_MOVIES_SUCCESS;

    constructor(public payload: any) { }
}

export class LoadMoviesFail implements Action {
    readonly type = LOAD_MOVIES_FAIL;

    constructor(public payload: any) { }
}

export type Actions = LoadMovies | LoadMoviesSuccess | LoadMoviesFail;