import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
	selector: 'search',
	templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
	searchStr: string;
	results: any;
	redirectUrl = 'https://accounts.spotify.com/authorize?client_id=e446b0cd48a34b60842abe80ee692a5b&response_type=token&redirect_uri=https://aksrugiw.github.io/ngSpotify/';

	constructor(private _spotifyService: SpotifyService, private activatedRoute: ActivatedRoute) {}

	ngOnInit() {
		this.activatedRoute.fragment.subscribe((fragment: string) => {
			if(fragment) {
		        let paramsUrl =  fragment.split('&');
		        let token = paramsUrl[0].split('=')[1];
				this._spotifyService.setToken(token);
			}
			else
				window.location.href = this.redirectUrl;
	    })
	}

	searchMusic() {
		this._spotifyService.searchMusic(this.searchStr)
			.subscribe(res => {
				this.results = res.artists.items;
			})
	}

}
