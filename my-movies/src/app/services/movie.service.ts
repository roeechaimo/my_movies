import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

// TODO - make this work and use in homw component
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private _http: HttpClient) { }

  public getMovies(movies: string[]){
    let result = [];

    result = movies.map(movie => {
      this._http.get(environment.baseUrl + environment.apiParams.apiKey + "&t=" + movie);
    });

    return result;
  }
}
