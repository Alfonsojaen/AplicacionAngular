import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, CollectionReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { News } from '../models/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private newsCollection: CollectionReference;

  constructor(private firestore: Firestore) {
    this.newsCollection = collection(this.firestore, 'news');
  }

  addNews(news: News): Promise<void> {
    return addDoc(this.newsCollection, news) as unknown as Promise<void>;
  }

  getNews(): Observable<News[]> {
    return collectionData(this.newsCollection, { idField: 'id' }) as Observable<News[]>;
  }
}