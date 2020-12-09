import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VacationComponent } from './vacation/vacation.component';
import { WorkComponent } from './work/work.component';

const routes: Routes = [
  { path: '', pathMatch: 'full',component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'work', component: WorkComponent },
  { path: 'vacation', component: VacationComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
