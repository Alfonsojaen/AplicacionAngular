import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NewsService } from '../../services/news.service';
import { News } from '../../models/news';
import { TmdbService } from '../../services/tmdb.service'; 
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule]
})
export class NoticiasComponent implements OnInit {
  newsForm: FormGroup;
  newsList: News[] = [];
  popularMovies: any[] = []; // Variable para almacenar las películas populares

  constructor(private fb: FormBuilder, private newsService: NewsService, private tmdbService: TmdbService) { // Inyecta el servicio TmdbService
    this.newsForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.newsService.getNews().subscribe(news => {
      this.newsList = news;
    });

    // Llama al método getPopularMovies para obtener las películas populares
    this.tmdbService.getPopularMovies().subscribe(movies => {
      this.popularMovies = movies.results; // Guarda las películas populares en la variable
    });
  }

  submitNews() {
    if (this.newsForm.valid) {
      const newNews: News = {
        title: this.newsForm.value.title,
        content: this.newsForm.value.content,
        date: new Date()
      };
      this.newsService.addNews(newNews).then(() => {
        this.newsForm.reset();
      }).catch(error => {
        console.error('Error adding news: ', error);
      });
    }
  }
}