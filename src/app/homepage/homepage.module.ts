import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { BasicRequirementsComponent } from './basic-requirements/basic-requirements.component';
import { TemporaryImpedimentsComponent } from './temporary-impediments/temporary-impediments.component';
import { DefinitiveImpedimentsComponent } from './definitive-impediments/definitive-impediments.component';
import { BloodDonorDayComponent } from './blood-donor-day/blood-donor-day.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [HomepageComponent, BasicRequirementsComponent, TemporaryImpedimentsComponent, DefinitiveImpedimentsComponent, BloodDonorDayComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    // RouterModule,
    HomeRoutingModule
  ]
})
export class HomepageModule { }
