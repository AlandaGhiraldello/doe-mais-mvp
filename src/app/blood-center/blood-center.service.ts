import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { User } from '../shared/models/user';
import { tap, delay, take } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { CrudService } from '../shared/crud-service';

@Injectable({
  providedIn: 'root'
})
export class BloodCenterService extends CrudService<User> {

    // private readonly API = `${environment.API}users`

  constructor(protected http: HttpClient) { 
    super(http, `${environment.API}/bloodCenter`);
  }

  // created(params) {
  //   return  this.http.post<any>('https://6295399563b5d108c19b90cd.mockapi.io/api/users', params)  
  // }


}
