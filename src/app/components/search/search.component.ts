import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
	selector: 'search',
	templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
	searchStr: string;
	results: any;

	constructor(private _spotifyService: SpotifyService) {}

	ngOnInit() {
		this._spotifyService.getToken();
	}

	searchMusic() {
		this._spotifyService.searchMusic(this.searchStr)
			.subscribe(res => {
				this.results = res.artists.items;
			})
	}

}
