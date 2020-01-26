import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Movie } from '../../model/movie';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { MovieService } from './movie.service';

@Injectable({
    providedIn: 'root'
})
export class MoviesResolver implements Resolve<Movie[]>{

    constructor(private $ser: MovieService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Movie[] | Observable<Movie[]> | Promise<Movie[]> {
        return this.$ser.getList();
    }

} 