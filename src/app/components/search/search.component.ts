import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
	selector: 'search',
	templateUrl: './search.component.html',
})
export class SearchComponent {
	searchStr: string;
	results: any;

	constructor(private _spotifyService: SpotifyService) {}

	searchMusic() {
		this._spotifyService.searchMusic(this.searchStr)
			.subscribe(res => {
				this.results = res.artists.items;
			})
	}

}
