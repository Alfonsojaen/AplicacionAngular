import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { map } from 'rxjs'
import { Image, ImagesDto } from '../models/image'
import { GenresDot, ApiMovie, ApiMoviesDto } from '../models/apimovie'

@Injectable()
export class ApiMovieService {
  private apiUrl = 'https://api.themoviedb.org/3'
  private apiKey = '0e0dae40eaa9dbd292aa8ef0226b63df'
  constructor(private http: HttpClient) {}

  getMoviesByType(type: string, count = 20) {
    return this.http
      .get<ApiMoviesDto>(`${this.apiUrl}/movie/${type}?api_key=${this.apiKey}`)
      .pipe(map((data) => data.results.slice(0, count)))
  }

  getSimilarMovies(id: string, count = 20) {
    return this.http
      .get<ApiMoviesDto>(
        `${this.apiUrl}/movie/${id}/similar?api_key=${this.apiKey}`
      )
      .pipe(map((data) => data.results.slice(0, count)))
  }

  getMovieById(id: string) {
    return this.http.get<ApiMovie>(
      `${this.apiUrl}/movie/${id}?api_key=${this.apiKey}`
    )
  }

  getMovieVideos(id: string) {
    return this.http
      .get<ApiMoviesDto>(
        `${this.apiUrl}/movie/${id}/videos?api_key=${this.apiKey}`
      )
      .pipe(map((data) => data.results))
  }

  getMovieImages(id: string) {
    return this.http
      .get<ImagesDto>(
        `${this.apiUrl}/movie/${id}/images?api_key=${this.apiKey}`
      )
      .pipe(map((data) => data.backdrops))
  }



  searchMovies(page: number, searchValue?: string) {
    const url = searchValue ? 'search/movie' : 'movie/popular'

    return this.http.get<ApiMoviesDto>(
      `${this.apiUrl}/${url}?query=${searchValue}&page=${page}&include_adult=true&api_key=${this.apiKey}`
    )
  }

  getMovieGenres() {
    return this.http
      .get<GenresDot>(`${this.apiUrl}/genre/movie/list?api_key=${this.apiKey}`)
      .pipe(map((data) => data.genres))
  }

  getMoviesByGenre(genreId?: string, pageNumber = 1) {
    return genreId
      ? this.http.get<ApiMoviesDto>(
          `${this.apiUrl}/discover/movie?with_genres=${genreId}&page=${pageNumber}&api_key=${this.apiKey}`
        )
      : this.http.get<ApiMoviesDto>(
          `${this.apiUrl}/movie/popular?api_key=${this.apiKey}`
        )
  }

}
