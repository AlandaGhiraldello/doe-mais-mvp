import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsRegistrationDonationComponent } from './forms-registration-donation/forms-registration-donation.component';
import { DonationListComponent } from './donation-list/donation-list.component';



@NgModule({
  declarations: [FormsRegistrationDonationComponent, DonationListComponent],
  imports: [
    CommonModule
  ]
})
export class CalendarModule { }
