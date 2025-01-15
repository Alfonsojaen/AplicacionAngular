import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../../services/tmdb.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-recomendaciones',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './recomendaciones.component.html',
  styleUrls: ['./recomendaciones.component.css']
})
export class RecomendacionesComponent implements OnInit {
  popularMovies: any[] = []; // Variable para almacenar las películas populares

  constructor(private tmdbService: TmdbService) { // Inyecta el servicio TmdbService
  }

  ngOnInit() {
    this.tmdbService.getPopularMovies().subscribe(movies => {
      this.popularMovies = movies.results; // Guarda las películas populares en la variable
    });
  }
}