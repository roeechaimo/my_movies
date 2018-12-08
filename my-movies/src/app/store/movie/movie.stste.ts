import {
  State,
  Action,
  StateContext
} from "@ngxs/store";
import {
  tap
} from "rxjs/operators";

import {
  MovieService
} from "src/app/services/movie.service";
import {
  LoadMovies
} from "./movie.actions";

export interface MovieStateModel {
    // TODO - change to Movie[] when possible
  movies: any;
}

@State < MovieStateModel > ({
  name: "movie",
  defaults: {
    movies: []
  }
})
export class MovieState {
  constructor(private _movieService: MovieService) {}

  @Action(LoadMovies)
  loadMovies(ctx: StateContext < MovieStateModel > , action: LoadMovies) {
    return this._movieService.getMovies(action.moviesToLoad)
    .pipe(
      tap((moviesToLoadResult) => {
        const state = ctx.getState();
        
        ctx.setState({
          ...state,
          movies: [...state.movies, moviesToLoadResult]
        });    
      })
    );
  }
}
