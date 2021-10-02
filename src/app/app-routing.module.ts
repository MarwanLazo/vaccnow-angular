import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BranchComponent } from './components/branch/branch.component';
import { HomeComponent } from './components/home/home.component';
import { ScheduleVaccinationComponent } from './components/schedule-vaccination/schedule-vaccination.component';
import { VaccConfirmationComponent } from './components/vacc-confirmation/vacc-confirmation.component';
import { VaccineComponent } from './components/vaccine/vaccine.component';


const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'branch', component: BranchComponent },
  { path: 'vaccine', component: VaccineComponent },
  { path: 'sched_vaccination', component: ScheduleVaccinationComponent },
  { path: 'VaccConfirmation', component: VaccConfirmationComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



}
