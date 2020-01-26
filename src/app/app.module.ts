import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { appRouting } from './app.routes';
import { PagesModule } from 'src/pages/pages.module';
import { MovieModule } from 'src/movie/movie.module';
import { RouterStateComponent } from './components/router-state/router-state.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    RouterStateComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    appRouting,
    PagesModule,
    MovieModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
