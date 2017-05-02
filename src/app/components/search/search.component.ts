import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
	selector: 'search',
	templateUrl: './search.component.html',
})
export class SearchComponent {
	searchStr: string;

	constructor(private _spotifyService: SpotifyService) {}

	searchMusic() {
	}

}
