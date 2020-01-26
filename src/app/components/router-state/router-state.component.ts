import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-router-state',
  templateUrl: './router-state.component.html',
  styleUrls: ['./router-state.component.scss']
})
export class RouterStateComponent implements OnInit {

  navigating = false;

  constructor(router: Router) {
    router.events.subscribe(
      event => {
        if (event instanceof NavigationStart) {
          this.navigating = true;
        } else {
          if ((event instanceof NavigationEnd) || (event instanceof NavigationCancel) || (event instanceof NavigationError)) {
            this.navigating = false;
          }
        }
        if (event instanceof NavigationError) {
          router.navigate(['/error']);
        }
      }
    )
  }

  ngOnInit() {
  }

}
