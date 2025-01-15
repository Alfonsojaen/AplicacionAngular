import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TmdbService implements OnInit {
  private apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZTBkYWU0MGVhYTlkYmQyOTJhYThlZjAyMjZiNjNkZiIsIm5iZiI6MTczMzkwOTcyMi4yMTEsInN1YiI6IjY3NTk1Y2RhNTA2YjQyMzk0ZDIxNTZhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.83ZGFvexWh_hdfPjvwP54KFZdZDmucWhIj49Ho3KZGA';
  private apiUrl = 'https://api.themoviedb.org/3/movie/popular';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getPopularMovies();
  }

  getPopularMovies(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.apiKey}`
    });
    return this.http.get<any>(this.apiUrl, { headers });
  }
}