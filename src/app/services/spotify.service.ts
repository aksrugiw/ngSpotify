import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
  private reaquestUrl: string;
	private searchUrl: string;
	private artistUrl: string;
	private albumsUrl: string;
	private albumUrl: string;

  private clientId = 'e446b0cd48a34b60842abe80ee692a5b';
  private clientSecret = '59aab456105b429cb1287390c77ed447';
  private authToken = '';
  private authHeaders: Headers;

  constructor(private _http: Http) { }

  setToken(token) {
        this.authToken = token;
  }

  createTokenAuthorizationHeader() {
    this.authHeaders = new Headers();
    this.authHeaders.append('Authorization', 'Bearer ' + this.authToken);
  }

  searchMusic(query:string, type='artist') {
    this.createTokenAuthorizationHeader();

  	this.searchUrl = 'https://api.spotify.com/v1/search?query=' + query + '&limit=20&type=' + type;
  	return this._http.get(this.searchUrl, {headers: this.authHeaders})
  		.map(res => res.json());
  }

  getArtist(id:string) {
    this.createTokenAuthorizationHeader();
    
  	this.artistUrl = 'https://api.spotify.com/v1/artists/' + id;
  	return this._http.get(this.artistUrl, {headers: this.authHeaders})
  		.map(res => res.json());
  }

  getAlbums(artistId:string) {
    this.createTokenAuthorizationHeader();
  	this.albumsUrl = 'https://api.spotify.com/v1/artists/' + artistId + '/albums';
  	return this._http.get(this.albumsUrl, {headers: this.authHeaders})
  		.map(res => res.json());
  }

  getAlbum(id:string) {
    this.createTokenAuthorizationHeader();
  	this.albumUrl = 'https://api.spotify.com/v1/albums/' + id;
  	return this._http.get(this.albumUrl, {headers: this.authHeaders})
  		.map(res => res.json());
  }

}
