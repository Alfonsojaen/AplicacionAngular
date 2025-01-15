import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/movie';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, RouterLink, MovieCardComponent],
  templateUrl: './movie-list.component.html',
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];
  loading: boolean = true;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((movies) => {
      this.movies = movies;
      this.loading = false;
    });
  }

  deleteMovie(id: string): void {
    this.movieService.deleteMovie(id);
  }
}