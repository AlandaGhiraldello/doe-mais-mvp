import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { User } from './user';
import { tap, delay, take } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

    private readonly API = `${environment.API}usuarios`;

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<User[]>(this.API)
    .pipe(
      delay(2000),
      tap(console.log)
    )
  }

  loadByID(id) {
    return this.http.get<User>(`${this.API}/${id}`).pipe(take(1));
  }

  create(user) {
    return this.http.post(this.API, user).pipe(take(1));
  }

  private update(user) {
    return this.http.put(`${this.API}/${user.id}`, user).pipe(take(1));
  }

  save(user) {
    if (user.id) {
      return this.update(user);
    }
    return this.create(user);
  }

  remove(id) {
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }

}
