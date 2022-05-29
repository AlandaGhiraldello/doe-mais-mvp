import { Component } from '@angular/core';
import { AuthService } from './users/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'doe-mais';
  exibMenu: boolean = false;

  constructor(private authService: AuthService) {

  }

  ngOnInit(){
    this.authService.exibMenuEmitter.subscribe(
      exib => this.exibMenu = exib
    );
  }
}
