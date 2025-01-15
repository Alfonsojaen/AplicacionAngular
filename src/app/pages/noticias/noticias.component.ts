import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NewsService } from '../../services/news.service';
import { News } from '../../models/news';

@Component({
  standalone: true,
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  imports: [CommonModule, ReactiveFormsModule]
})
export class NoticiasComponent implements OnInit {
  newsForm: FormGroup;
  newsList: News[] = [];

  constructor(private fb: FormBuilder, private newsService: NewsService) {
    this.newsForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.newsService.getNews().subscribe(news => {
      this.newsList = news;
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