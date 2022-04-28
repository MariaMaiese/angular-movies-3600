import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getDataMovies() {
    return this.http.get('https://www.omdbapi.com/?s=harry&apikey=caf9bc34')
  }
}
