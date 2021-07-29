import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) { }

  artistsURL = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/user/2529";

  albumsURL = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/302127";

  playListURL = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/user/2529/playlists";

  getArtists() {
    return this.http.get(this.artistsURL);
  }

  getAlbums() {
    return this.http.get(this.albumsURL);
  }

  getPlaylists() {
    return this.http.get(this.playListURL);
  }
}
