import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userAuth: boolean = false;

  exibMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  toDoLogin (user: Usuario){
    
    if (user.email === 'user@email.com' && 
      user.password === '1234') {

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
