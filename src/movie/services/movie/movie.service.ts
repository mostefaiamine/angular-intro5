import { Injectable } from '@angular/core';
import { Observable, timer, of, throwError } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { Movie } from 'src/movie/model/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private $data: Movie[] = [
    { id: 1, title: 'John Wick', genre: 'Action' },
    { id: 2, title: 'Star Wars - The Empire Strikes Back', genre: 'sci-fi' },
    { id: 3, title: 'Titanic', genre: 'drama' },
    { id: 4, title: 'Conjuring', genre: 'horror' }
  ]

  constructor() { }

  getOne(id: any): Observable<Movie> {
    const movie = this.$data.find(m => m.id == id);
    if (movie != null) {
      return timer(2000).pipe(
        map(s => movie)
      );
    }
    return timer(2000).pipe(
      mergeMap(s => throwError({ error: 'no movie found' })));
  }

  getList(): Observable<Movie[]> {
    return timer(2000).pipe(
      map(s => this.$data)
    )

  }
}
