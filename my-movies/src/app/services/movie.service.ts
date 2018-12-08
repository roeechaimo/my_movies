import {
  Injectable
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';

import {
  Observable
} from 'rxjs';

import {
  environment
} from 'src/environments/environment';

@Injectable({
  providedIn: "root"
})
export class MovieService {
  public movies;
  public moviesToReturn = [];
  public moviesObs = new Observable(observer => {    
    this.movies.map(movie => {
      movie.subscribe(res => {
        this.moviesToReturn.push(res);
      });
    })

    observer.next(this.moviesToReturn);
    observer.complete();

    return {
      unsubscribe() {}
    };
  });

  private _env = environment;

  constructor(private _http: HttpClient) {}

  public getMovies(movies) {
    this.movies = movies.map(movieToGet => {
      return this.getMovie(movieToGet);
    });

    return this.moviesObs;
  }

  public getMovie(movie) {
    return this._http.get(
      this._env.baseUrl + this._env.apiParams.apiKey + "&t=" + movie
    );
  }
}
