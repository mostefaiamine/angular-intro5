import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { Movie } from 'src/movie/model/movie';
import { MovieService } from 'src/movie/services/movie/movie.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  error = false;

  loading = true;

  movie: Movie = null;

  constructor(private $ar: ActivatedRoute, private $ser: MovieService) { }

  ngOnInit() {
    this.$ar.params.subscribe(
      p => {
        this.loading = true;
        this.$ser.getOne(p.id).pipe(
          finalize(() => this.loading = false)
        ).subscribe(
          success => this.movie = success,
          err => this.error = true
        );
      }
    );
  }

}
