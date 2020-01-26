import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { Example1Component } from './components/example1/example1.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { Example2Component } from './components/example2/example2.component';
import { Example2Sub1Component } from './components/example2-sub1/example2-sub1.component';
import { Example2Sub2Component } from './components/example2-sub2/example2-sub2.component';
import { RouterModule } from '@angular/router';
import { Example2HomeComponent } from './components/example2-home/example2-home.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { ErrorComponent } from './components/error/error.component';
import { LoggedComponent } from './components/logged/logged.component';
import { LoginComponent } from './components/login/login.component';




@NgModule({
  declarations: [HomeComponent,
    Example1Component, NotFoundComponent, Example2Component,
    Example2Sub1Component, Example2Sub2Component, Example2HomeComponent, MovieListComponent, MovieDetailsComponent, ErrorComponent, LoggedComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
    
  ]
})
export class PagesModule { }
