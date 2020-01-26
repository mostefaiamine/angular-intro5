import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/authentication/services/authentication.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  constructor(public ser: AuthenticationService) { }

  ngOnInit() {
  }

}
