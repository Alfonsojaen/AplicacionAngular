import { Component } from '@angular/core';
import { MovieApiService } from '../../services/movie-api.service';


@Component({
  selector: 'app-hello-world',
  standalone: true,
  imports: [],
  templateUrl: './hello-world.component.html',
  styleUrl: './hello-world.component.css'
})
export class HelloWorldComponent {
  popularMovies: any[] = [];

  constructor(private movieApiService: MovieApiService) {}

  ngOnInit(): void {
    this.movieApiService.getPopularMovies().subscribe((response: any) => {
      this.popularMovies = response.results;
    });
  }
}