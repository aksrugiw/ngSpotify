import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html'
})
export class ArtistComponent implements OnInit {
	artist: any;
  albums: any;

  constructor(
  	private _spotifyService: SpotifyService,
  	private _route: ActivatedRoute
	)
  { }

  ngOnInit() {
  	this._route.params
  		.map(params => params['id'])
  		.subscribe(id => {
  			this._spotifyService.getArtist(id)
  				.subscribe(artist => {
  					this.artist = artist;
  				});

        this._spotifyService.getAlbums(id)
          .subscribe(albums => {
            this.albums = albums.items
          });
  		})
  }

}
