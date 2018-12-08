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
  LoadMovies,
  UpdateMovie,
  CreateMovie,
  DeleteMovie
} from "./movie.actions";

export interface MovieStateModel {
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

  @Action(UpdateMovie)
  updateMovie(ctx: StateContext < MovieStateModel > , action: UpdateMovie) {
    const state = ctx.getState();
    const toDestruct = state.movies.length ? state.movies[0] : state.movies;

    let movies = toDestruct;
    const movieIndex = toDestruct.findIndex(movie => movie.imdbID === action.movie.imdbID);
    movies[movieIndex] = action.movie;

    ctx.setState({
      ...state,
      movies: [movies]
    });
  }

    @Action(CreateMovie)
    createMovie(ctx: StateContext<MovieStateModel>, action: CreateMovie) {
        const state = ctx.getState();
        const toDestruct = state.movies.length ? state.movies[0] : state.movies;

        let movies = toDestruct;        
        movies.push(action.movie);

        ctx.setState({
            ...state,
            movies: [movies]
        });
    }

    @Action(DeleteMovie)
    deleteMovie(ctx: StateContext<MovieStateModel>, action: DeleteMovie) {
        const state = ctx.getState();
        const toDestruct = state.movies.length ? state.movies[0] : state.movies;

        let movies = toDestruct.filter(movie => movie.imdbID !== action.movie.imdbID);    

        ctx.setState({
            ...state,
            movies: [movies]
        });
    }
}
