import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../../services/tmdb.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-recomendaciones',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './recomendaciones.component.html',
  styleUrls: ['./recomendaciones.component.css']
})
export class RecomendacionesComponent implements OnInit {
  popularMovies: any[] = []; // Variable para almacenar las películas populares
  topRatedMovies: any[] = []; // Variable para almacenar las películas mejor valoradas
  searchResults: any[] = []; // Variable para almacenar los resultados de búsqueda
  searchForm: FormGroup; // Formulario de búsqueda

  constructor(private tmdbService: TmdbService, private fb: FormBuilder) { // Inyecta el servicio TmdbService y FormBuilder
    this.searchForm = this.fb.group({
      query: ['']
    });
  }

  ngOnInit() {
    this.tmdbService.getPopularMovies().subscribe(movies => {
      this.popularMovies = movies.results; // Guarda las películas populares en la variable
    });

    this.tmdbService.getTopRatedMovies().subscribe(movies => {
      this.topRatedMovies = movies.results; // Guarda las películas mejor valoradas en la variable
    });
  }

  onSearch() {
    const query = this.searchForm.get('query')?.value;
    if (query) {
      this.tmdbService.searchMovies(query).subscribe(results => {
        this.searchResults = results.results; // Guarda los resultados de búsqueda en la variable
      });
    }
  }
}