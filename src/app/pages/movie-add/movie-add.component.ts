import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/movie';
import { NotificationComponent } from '../../components/notification/notification.component';

@Component({
  selector: 'app-movie-add',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NotificationComponent],
  templateUrl: './movie-add.component.html',
})
export class MovieAddComponent {
  showAlert: boolean = false;
  alertMessage: string = "";
  alertClass: string = "";
  movieForm = new FormGroup({
    title: new FormControl(''),
    director: new FormControl(''),
    genre: new FormControl(''),
    releaseYear: new FormControl(''),
    poster: new FormControl(''),
  });

  constructor(private movieService: MovieService) {}

  submitMovie() {
    let newMovie: Movie = {
      title: this.movieForm.value.title ?? "",
      director: this.movieForm.value.director ?? "",
      genre: this.movieForm.value.genre ?? "",
      releaseYear: this.movieForm.value.releaseYear ?? "",
      poster: this.movieForm.value.poster ?? ""
    }
    this.movieService.addMovie(newMovie).then(()=>{
      this.alertMessage = `Añadida película ${this.movieForm.value.title}`;
      this.alertClass = "success";
      this.showAlert = true;
      this.movieForm.reset();
    }).catch((error) => {
      this.alertMessage = `Error al añadir película ${this.movieForm.value.title}: ${error}`;
      this.alertClass = "danger";
      this.showAlert = true;
    });
  }
}