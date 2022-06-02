import { Component } from '@angular/core';
import { StorageService } from './services/storage.service';
import { AuthService } from './users/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'doe-mais';
  exibMenu: boolean = false;

  constructor(private authService: AuthService, 
    private storage: StorageService) {

  }

  ngOnInit(){
    this.storage.setUsers([
      {
        "id": 1,
        "name": "Alanda teste 1",
        "rg": "123456789",
        "email": "teste@teste.com",
        "password": "1234",
        "sex": "Feminino",
        "gender": "Mulher Cisgênero",
        "birthday": "27/12/1999",
        "typeblood": "A+",
        "phone": "011994858698"
      }
    ])
    this.authService.exibMenuEmitter.subscribe(
      exib => this.exibMenu = exib
    );
  }
}
