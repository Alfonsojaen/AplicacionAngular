import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {
  private apiKey = '0e0dae40eaa9dbd292aa8ef0226b63df';
  private apiUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  getPopularMovies(): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/popular?api_key=${this.apiKey}&language=en-US&page=1`);
  }

  getMovieDetails(movieId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/${movieId}?api_key=${this.apiKey}`);
  }
}
