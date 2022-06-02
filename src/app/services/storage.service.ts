import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  setUsers(users) {
    localStorage.setItem('users', JSON.stringify(users))
  }

  getUsers() {
    return JSON.parse(localStorage.getItem('users'))
  }

}

