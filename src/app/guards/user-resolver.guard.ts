import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { User } from '../shared/models/user';
import { Observable, of } from 'rxjs';
import { UsersService } from '../users/users.service';

@Injectable({
    providedIn: 'root'
})
export class UserResolverGuard implements Resolve<User> {
    constructor(private service: UsersService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): User | Observable<User> {
        if (route.params && route.params['id']) {
          return this.service.loadByID(route.params['id']);
        }
    
        return of({
          id: null,
          name: null,
          rg: null,
          email: null,
          password: null,
          sex: null,
          gender: null,
          birthday: null,
          typeblood: null,
          phone: null
        });
      }




    	// canActivateChild(
        //     route: ActivatedRouteSnapshot,
        //     state: RouterStateSnapshot
        // ): Observable<boolean>|boolean {

        //     console.log('guarda de rota filha');

        //     return true;
        // }

}