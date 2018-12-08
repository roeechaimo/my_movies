export class LoadMovies {
    static readonly type = '[Movie] Load Movies';

    constructor(public moviesToLoad: string[]) { }
}