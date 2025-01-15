import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData, addDoc, updateDoc, deleteDoc, CollectionReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movieCollection: CollectionReference;

  constructor(private firestore: Firestore) {
    this.movieCollection = collection(this.firestore, 'movies');
  }

  getMovies(): Observable<Movie[]> {
    return collectionData(this.movieCollection, { idField: 'id' }) as Observable<Movie[]>;
  }

  getMovie(id: string): Observable<Movie | undefined> {
    const movieDocRef = doc(this.firestore, `movies/${id}`);
    return docData(movieDocRef) as Observable<Movie | undefined>;
  }

  addMovie(movie: Movie): Promise<void> {
    return addDoc(this.movieCollection, movie) as unknown as Promise<void>;
  }

  updateMovie(id: string, movie: Partial<Movie>): Promise<void> {
    const movieDocRef = doc(this.firestore, `movies/${id}`);
    return updateDoc(movieDocRef, movie) as Promise<void>;
  }

  deleteMovie(id: string): Promise<void> {
    const movieDocRef = doc(this.firestore, `movies/${id}`);
    return deleteDoc(movieDocRef) as Promise<void>;
  }
}