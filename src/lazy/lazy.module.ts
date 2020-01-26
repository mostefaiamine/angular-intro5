import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyPageComponent } from './components/lazy-page/lazy-page.component';
import { routingModule } from './lazy.routes';



@NgModule({
  declarations: [LazyPageComponent],
  imports: [
    CommonModule,
    routingModule
  ]
})
export class LazyModule { }
