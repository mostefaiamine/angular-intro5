import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private $currentUser: string = null;

  private $isConnected = false;

  constructor() { }



  isConnected(): Observable<boolean> {
    return timer(2000).pipe(
      map(s => this.$isConnected)
    );
  }

  signin(userName: string, password: string): boolean {
    if ((userName === 'admin') && (password === 'admin')) {
      this.$isConnected = true;
      this.$currentUser = userName;
    } else {
      this.$isConnected = false;
    }
    return this.$isConnected;
  }

  public get currentUser(): string {
    return this.$currentUser;
  }
}
