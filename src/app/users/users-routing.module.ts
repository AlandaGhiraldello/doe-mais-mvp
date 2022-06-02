import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserResolverGuard } from '../guards/user-resolver.guard';

import { FormsMainInformationComponent } from './forms-main-information/forms-main-information.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

const usersRoutes: Routes = [
  { path: 'login', component: LoginComponent},
  { 
    path: 'cadastro', 
    component: FormsMainInformationComponent,
    resolve: {
      user: UserResolverGuard
    }
  },
  { 
    path: 'editar/:id', 
    component: FormsMainInformationComponent,
    resolve: {
      user: UserResolverGuard
    }
  },
  { 
    path: 'perfil/:id', 
    component: ProfileComponent,
    resolve: {
      user: UserResolverGuard
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(usersRoutes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
