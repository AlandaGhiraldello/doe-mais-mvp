import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicRequirementsComponent } from './basic-requirements/basic-requirements.component';
import { BloodDonorDayComponent } from './blood-donor-day/blood-donor-day.component';
import { DefinitiveImpedimentsComponent } from './definitive-impediments/definitive-impediments.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TemporaryImpedimentsComponent } from './temporary-impediments/temporary-impediments.component';


const homeRoutes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'requisitos-basicos', component: BasicRequirementsComponent},
  { path: 'impedimentos-temporarios', component: TemporaryImpedimentsComponent},
  { path: 'impedimentos-definitivos', component: DefinitiveImpedimentsComponent},
  { path: 'dia-do-doador', component: BloodDonorDayComponent},
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
