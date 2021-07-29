import { Component, OnInit,Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataServiceService } from '../app/data-service.service'
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  title = 'musicdb-app-angular';

  artists: any = [];
  albums: any = [];
  playlist: any = [];

  constructor(private data: DataServiceService) { }

  ngOnInit() {

  this.getAlbums();
  this.getArtists();
  this.getPlaylists()

  }

  getArtists() {
    let jackpotSub: Subscription = this.data.getArtists().subscribe(res => {

      this.artists = res;
      console.log("artists data", res);
      jackpotSub.unsubscribe();
    });
  }

  getAlbums() {
    let jackpotSub: Subscription = this.data.getAlbums().subscribe(res => {

      this.albums = res;
      console.log("albums data", res);
      jackpotSub.unsubscribe();
    });
  }

  getPlaylists() {
    let jackpotSub: Subscription = this.data.getPlaylists().subscribe(res => {

      this.playlist = res;
      console.log("playlists data", res);
      jackpotSub.unsubscribe();
    });
  }

}
