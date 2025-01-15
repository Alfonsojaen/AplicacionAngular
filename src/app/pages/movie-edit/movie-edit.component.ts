import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/movie';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NotificationComponent } from '../../components/notification/notification.component';

@Component({
  selector: 'app-movie-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, NotificationComponent],
  templateUrl: './movie-edit.component.html',
})
export class MovieEditComponent implements OnInit {
  movie: Movie = { title: '', director: '', genre: '', releaseYear: '', poster: '' };
  id: string = '';
  showAlert: boolean = false;
  alertMessage: string = "";
  alertClass: string = "";

  constructor(private movieService: MovieService, private route: ActivatedRoute, private router: Router) {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      // Obtener los detalles de la película desde Firestore
      console.log(this.id);
      this.movieService.getMovie(this.id).subscribe({
        error: (error) => {
          this.alertMessage = `Error al cargar la película: ${error}`;
          this.alertClass = "danger";
          this.showAlert = true;
        },
        next: (movie) => {
          if (movie) {
            this.movie = movie;
          } else {
            this.alertMessage = `La película con id ${this.id} no existe`;
            this.alertClass = "danger";
            this.showAlert = true;
          }
        }
      });
    }
  }

  ngOnInit(): void {}

  updateMovie() {
    if (this.id) {
      this.movieService.updateMovie(this.id, this.movie).then(() => {
        this.alertMessage = `Película editada correctamente`;
        this.alertClass = "success";
        this.showAlert = true;
        this.router.navigate(['/peliculas']); // Redirigir a la lista de películas
      }).catch((error) => {
        this.alertMessage = `Error al editar la película: ${error}`;
        this.alertClass = "danger";
        this.showAlert = true;
      });
    }
  }
}