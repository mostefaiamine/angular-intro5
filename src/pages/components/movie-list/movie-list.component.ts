import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Movie } from 'src/movie/model/movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movies: Movie[] = null;

  constructor(private $router: Router, private $ar: ActivatedRoute) { }

  ngOnInit() {
    this.$ar.data.subscribe(
      d => this.movies = d.movies
    );

  }

}
