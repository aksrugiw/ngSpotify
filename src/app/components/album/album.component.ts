import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './album.component.html'
})
export class AlbumComponent implements OnInit {
  album: any;

  constructor(
  	private _spotifyService: SpotifyService,
  	private _route: ActivatedRoute
	)
  { }

  ngOnInit() {
  	this._route.params
  		.map(params => params['id'])
  		.subscribe(id => {
			this._spotifyService.getAlbum(id)
				.subscribe(album => {
					this.album = album
				});
			});
  }

}
