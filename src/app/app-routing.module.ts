import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListOfBloodCenterComponent } from './blood-center/list-of-blood-center/list-of-blood-center.component';
import { DonationListComponent } from './calendar/donation-list/donation-list.component';
import { CampaignsListComponent } from './campaigns/campaigns-list/campaigns-list.component';
import { HomepageComponent } from './homepage/homepage/homepage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'hemocentros', component: ListOfBloodCenterComponent},
  { path: 'calendario-de-doacoes', component: DonationListComponent},
  { path: 'campanhas', component: CampaignsListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
