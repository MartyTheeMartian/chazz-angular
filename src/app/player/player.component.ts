import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import arrayShuffler from '../../helpers/array-shuffler';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})

export class PlayerComponent implements OnInit {

  http: Http;
  loading: boolean;
  count: number;
  playlists: string[];
  url: string;
  spotify: SafeResourceUrl;


  constructor(http: Http, private sanitizer: DomSanitizer) {
    this.loading = false;
    this.http = http;
    this.count = -1;
    this.playlists = [];
    this.url = 'https://embed.spotify.com/?uri=';
    this.spotify = sanitizer.bypassSecurityTrustResourceUrl('https://embed.spotify.com/?uri=spotify:user:gita1503:playlist:2qkXmULVYKfaQVLYQiuMJA');
  }

  getSpotify() {
    this.loading = true;
    let query = 'jazz blues';
    let urlR = `https://api.spotify.com/v1/search?q=${query}&type=playlist&market=US&limit=50`;
    return this.http.get(urlR)
      .subscribe((res: Response) => {
         let rObj = res.json();
         let pArray = rObj.playlists.items;
         this.playlists = pArray.map((element) => {
           return element.uri;
      });
      this.playlists = arrayShuffler(this.playlists);
      this.loading = false;
    });
  }

  nextPlaylist() {
    this.loading = true;
    if(this.count === 49) {
      this.count = -1;
    }
    this.count++;
    let tempUrl = this.url + this.playlists[this.count];
    this.spotify = this.sanitizer.bypassSecurityTrustResourceUrl(tempUrl);
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  }

  ngOnInit() {
    this.spotify = this.sanitizer.bypassSecurityTrustResourceUrl('https://embed.spotify.com/?uri=spotify:user:gita1503:playlist:2qkXmULVYKfaQVLYQiuMJA') ;
    this.getSpotify();
  }

}
