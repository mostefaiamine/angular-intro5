import { Movie } from 'src/movie/model/movie';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { MovieService } from './movie.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MovieResolver implements Resolve<Movie>{

    constructor(private $ser: MovieService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Movie | Observable<Movie> | Promise<Movie> {
        return this.$ser.getOne(route.params.id);
    }

}