import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsMainInformationComponent } from './forms-main-information/forms-main-information.component';
import { FormsOtherInformationComponent } from './forms-other-information/forms-other-information.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

const usersRoutes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'cadastro', component: FormsMainInformationComponent},
  { path: 'completar-cadastro', component: FormsOtherInformationComponent},
  { path: 'perfil', component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forChild(usersRoutes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
