import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './views/menu/menu.component';
import { CalendarModule } from './calendar/calendar.module';
import { BloodCenterModule } from './blood-center/blood-center.module';
import { CampaignsModule } from './campaigns/campaigns.module';
import { HomepageModule } from './homepage/homepage.module';
import { NotificationsModule } from './notifications/notifications.module';
import { QuestionnairesModule } from './questionnaires/questionnaires.module';
import { UsersModule } from './users/users.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './users/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    BloodCenterModule,
    CalendarModule,
    CampaignsModule,
    HomepageModule,
    NotificationsModule,
    QuestionnairesModule,
    UsersModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [
    // AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
