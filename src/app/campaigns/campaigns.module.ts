import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsRegistrationCampaignsComponent } from './forms-registration-campaigns/forms-registration-campaigns.component';
import { CampaignsListComponent } from './campaigns-list/campaigns-list.component';



@NgModule({
  declarations: [FormsRegistrationCampaignsComponent, CampaignsListComponent],
  imports: [
    CommonModule
  ]
})
export class CampaignsModule { }
