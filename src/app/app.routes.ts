import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/pages/components/home/home.component';
import { Example1Component } from 'src/pages/components/example1/example1.component';
import { NotFoundComponent } from 'src/pages/components/not-found/not-found.component';
import { Example2Component } from 'src/pages/components/example2/example2.component';
import { Example2Sub1Component } from 'src/pages/components/example2-sub1/example2-sub1.component';
import { Example2Sub2Component } from 'src/pages/components/example2-sub2/example2-sub2.component';
import { Example2HomeComponent } from 'src/pages/components/example2-home/example2-home.component';
import { MovieListComponent } from 'src/pages/components/movie-list/movie-list.component';
import { MoviesResolver } from 'src/movie/services/movie/movies-resolver';
import { MovieDetailsComponent } from 'src/pages/components/movie-details/movie-details.component';
import { ErrorComponent } from 'src/pages/components/error/error.component';
import { LoggedComponent } from 'src/pages/components/logged/logged.component';
import { AuthenticationGuard } from 'src/authentication/services/authentication-guard';
import { LoginComponent } from 'src/pages/components/login/login.component';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'ex1',
        component: Example1Component
    },
    {
        path: 'ex2',
        component: Example2Component,
        children: [
            {
                path: '',
                component: Example2HomeComponent
            },
            {
                path: 'sub1',
                component: Example2Sub1Component
            },
            {
                path: 'sub2',
                component: Example2Sub2Component
            }
        ]
    },
    {
        path: 'movies',
        children: [
            {
                path: '',
                component: MovieListComponent,
                resolve: {
                    movies: MoviesResolver
                }
            },
            {
                path: ':id',
                component: MovieDetailsComponent,
            }
        ]

    },
    {
        path: 'logged',
        component: LoggedComponent,
        canActivate: [
            AuthenticationGuard
        ]
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'lazy',
        loadChildren: () => import('src/lazy/lazy.module').then(m => m.LazyModule)
    },
    {
        path: 'error',
        component: ErrorComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

export const appRouting = RouterModule.forRoot(appRoutes);
