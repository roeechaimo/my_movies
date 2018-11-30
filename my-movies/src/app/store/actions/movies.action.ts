import { Action } from '@ngrx/store';
import {Movie} from '../../core/models/movie.model';

export const LOAD_MOVIES = '[Movies] Load Movies';

export class LoadMovies implements Action {
    readonly type = LOAD_MOVIES;

    constructor(public payload: any){}
}

export type Actions = LoadMovies;