import {
  Injectable
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';

import {
  environment
} from 'src/environments/environment';

@Injectable({
  providedIn: "root"
})
export class MovieService {
  private _env = environment;

  constructor(private _http: HttpClient) {}

  public getMovie(movie) {
    return this._http.get(this._env.baseUrl + this._env.apiParams.apiKey + "&t=" + movie);
  }
}
