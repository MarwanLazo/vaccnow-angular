import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContectsComponent } from './components/contects/contects.component';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { HomeComponent } from './components/home/home.component';
import { VaccineComponent } from './components/vaccine/vaccine.component';
import { BranchComponent } from './components/branch/branch.component';
import { ScheduleVaccinationComponent } from './components/schedule-vaccination/schedule-vaccination.component';

@NgModule({
  declarations: [
    AppComponent,
    ContectsComponent,
    ToolBarComponent,
    HomeComponent,
    VaccineComponent,
    BranchComponent,
    ScheduleVaccinationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
