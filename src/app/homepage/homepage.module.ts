import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { BasicRequirementsComponent } from './basic-requirements/basic-requirements.component';
import { TemporaryImpedimentsComponent } from './temporary-impediments/temporary-impediments.component';
import { DefinitiveImpedimentsComponent } from './definitive-impediments/definitive-impediments.component';



@NgModule({
  declarations: [HomepageComponent, BasicRequirementsComponent, TemporaryImpedimentsComponent, DefinitiveImpedimentsComponent],
  imports: [
    CommonModule
  ]
})
export class HomepageModule { }
