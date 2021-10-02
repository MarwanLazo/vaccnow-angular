import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllBranchesComponent } from './components/all-branches/all-branches.component';
import { AllVaccineByBranchComponent } from './components/all-vaccine-by-branch/all-vaccine-by-branch.component';
import { BranchComponent } from './components/branch/branch.component';
import { HomeComponent } from './components/home/home.component';
import { ScheduleVaccinationComponent } from './components/schedule-vaccination/schedule-vaccination.component';
import { VaccConfirmationComponent } from './components/vacc-confirmation/vacc-confirmation.component';
import { VaccineAvaliableByBranchComponent } from './components/vaccine-avaliable-by-branch/vaccine-avaliable-by-branch.component';
import { VaccineBranchComponent } from './components/vaccine-branch/vaccine-branch.component';
import { VaccineComponent } from './components/vaccine/vaccine.component';


const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'branch', component: BranchComponent },
  { path: 'vaccine', component: VaccineComponent },
  { path: 'sched_vaccination', component: ScheduleVaccinationComponent },
  { path: 'vaccin_branch', component: VaccineBranchComponent },
  { path: 'VaccConfirmation', component: VaccConfirmationComponent },
  { path: 'branches', component: AllBranchesComponent },
  { path: 'vaccineByBranch', component: AllVaccineByBranchComponent },
  { path: 'vaccine_in_branch', component: VaccineAvaliableByBranchComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



}
