import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';

import { FormsOtherInformationComponent } from './forms-other-information/forms-other-information.component';
import { FormsMainInformationComponent } from './forms-main-information/forms-main-information.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { UsersRoutingModule } from './users-routing.module';
import { UsersService } from './users.service';


@NgModule({
  declarations: [FormsOtherInformationComponent, FormsMainInformationComponent, ProfileComponent, LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    // RouterModule,
    UsersRoutingModule
  ],
  providers: [
    UsersService
  ]
})
export class UsersModule { }
