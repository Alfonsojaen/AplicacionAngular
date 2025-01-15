// filepath: /c:/Users/ariza/Desktop/AplicacionAngular/src/app/components/movie-card/movie-card.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from '../../models/movie';
import { RouterLink } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent {
  @Input() movie!: Movie;

  constructor(private movieService: MovieService) {}

  deleteMovie(id: string): void {
    this.movieService.deleteMovie(id).then(() => {
      console.log(`Película con id ${id} eliminada`);
    }).catch((error) => {
      console.error(`Error al eliminar la película: ${error}`);
    });
  }
}