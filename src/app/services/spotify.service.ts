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

  constructor(private _http: Http) { }

  getToken() {
    var headers = new Headers();
    headers.append('Authorization', 'Basic ' + btoa(this.clientId + ':' + this.clientSecret));
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.reaquestUrl = 'https://accounts.spotify.com/api/token';
    var content = 'grant_type=client_credentials';

    return this._http.post(this.reaquestUrl, content, {headers: headers})
      .map(res => res.json())
      .subscribe(res => {
        this.authToken = res.access_token;
      });
  }

  searchMusic(query:string, type='artist') {
    var headers = new Headers();
    headers.append('Authorization', 'Bearer ' + this.authToken); 

  	this.searchUrl = 'https://api.spotify.com/v1/search?query=' + query + '&limit=20&type=' + type;
  	return this._http.get(this.searchUrl, {headers: headers})
  		.map(res => res.json());
  }

  getArtist(id:string) {
    var headers = new Headers();
    headers.append('Authorization', 'Bearer ' + this.authToken);
  	this.artistUrl = 'https://api.spotify.com/v1/artists/' + id;
  	return this._http.get(this.artistUrl, {headers: headers})
  		.map(res => res.json());
  }

  getAlbums(artistId:string) {
    var headers = new Headers();
    headers.append('Authorization', 'Bearer ' + this.authToken);
  	this.albumsUrl = 'https://api.spotify.com/v1/artists/' + artistId + '/albums';
  	return this._http.get(this.albumsUrl, {headers: headers})
  		.map(res => res.json());
  }

  getAlbum(id:string) {
    var headers = new Headers();
    headers.append('Authorization', 'Bearer ' + this.authToken);
  	this.albumUrl = 'https://api.spotify.com/v1/albums/' + id;
  	return this._http.get(this.albumUrl, {headers: headers})
  		.map(res => res.json());
  }

}
