import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { AuthService } from '../auth.service';
// import usersData from './../../db.json';  
import { User } from '../../shared/models/user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  userList

  constructor(
    private authService: AuthService,
    private router: Router,
    private storage: StorageService,
    private route: ActivatedRoute,
    private service: UsersService

    ) { }

  ngOnInit(): void {
    //   this.route.params.subscribe(
    //   (params: any) => {
    //     const id = params['id'];
    //     console.log(id);
    //     const curso$ = this.service.loadByID(id);
    //   }
    // );
    this.userList = this.storage.getUsers()
    console.log(this.userList)
  }

  toDoLogin(){
    console.log(this.user)
    this.authService.toDoLogin(this.user);

  }

}
