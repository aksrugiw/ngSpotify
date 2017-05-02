import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
	private searchUrl: string;

  constructor(private _http: Http) { }

  searchMusic(query:string, type='artist') {
  	this.searchUrl = 'https://api.spotify.com/v1/search?query=' + query + '&limit=20&type=' + type;
  	return this._http.get(this.searchUrl)
  		.map(res => res.json());
  }

}
