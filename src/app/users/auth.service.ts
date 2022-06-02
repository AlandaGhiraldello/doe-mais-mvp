import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { User } from '../shared/models/user';
// import * as db from './../../assets/'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userAuth: boolean = false;

  exibMenuEmitter = new EventEmitter<boolean>();
  // private readonly API = `${environment.API}users`

  constructor(
    private router: Router,
    private http: HttpClient
    ) { }

    // create (params) {
    //   return  this.http.post<any>('https://6295399563b5d108c19b90cd.mockapi.io/api/users', params)  
    // }

  toDoLogin (user: User){

    
    if (user.email === user.password) {

      this.userAuth = true;

      this.exibMenuEmitter.emit(true);

      this.router.navigate(['/']);

    } else {
      this.userAuth = false;

      this.exibMenuEmitter.emit(false);
    }
  }

  userAuthentication(){
    return this.userAuth;
  }
}