import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestDonorProfileComponent } from './test-donor-profile/test-donor-profile.component';
import { TestWhoDonatesToWhomComponent } from './test-who-donates-to-whom/test-who-donates-to-whom.component';



@NgModule({
  declarations: [TestDonorProfileComponent, TestWhoDonatesToWhomComponent],
  imports: [
    CommonModule
  ]
})
export class QuestionnairesModule { }
