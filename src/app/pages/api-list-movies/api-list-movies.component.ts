import { Component, OnInit } from '@angular/core';
import { ApiMovieService } from '../../services/api-movie.service';
import { ApiMovie } from '../../models/apimovie';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-api-list-movies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './api-list-movies.component.html',
  styleUrls: ['./api-list-movies.component.css']
})
export class ApiListMoviesComponent implements OnInit {  
  popularMovies$: any;
  // upcomingMovies$: any;
  topRatedMovies$: any;

  constructor(
    private moviesService: ApiMovieService,
  ) {}

  ngOnInit(): void {
    this.popularMovies$ = this.moviesService.getMoviesByType('popular', 12);
    // this.upcomingMovies$ = this.moviesService.getMoviesByType('upcoming', 12);
    this.topRatedMovies$ = this.moviesService.getMoviesByType('top_rated', 12);
  }
}