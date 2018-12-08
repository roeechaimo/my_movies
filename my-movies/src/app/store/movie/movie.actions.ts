import {
  Movie
} from "src/app/core/models/movie.model";

export class LoadMovies {
  static readonly type = '[Movie] Load Movies';

  constructor(public moviesToLoad: string[]) {}
}

export class UpdateMovie {
  static readonly type = "[Movie] Update Movie";

  constructor(public movie: Movie) {}
}

export class CreateMovie {
  static readonly type = "[Movie] Create Movie";

  constructor(public movie: Movie) {}
}

export class DeleteMovie {
    static readonly type = "[Movie] Delete Movie";

    constructor(public movie: Movie) { }
}