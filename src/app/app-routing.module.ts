import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationPageComponent } from './auth/authentication-page/authentication-page.component';
import { CalendarComponent } from './scheduler/components/calendar/calendar.component';
import { SchedulerComponent } from './scheduler/components/scheduler/scheduler.component';

const routes: Routes = [
  { path: '', component: SchedulerComponent, pathMatch: 'full' },
  { path: 'calendar', component: CalendarComponent },
  { path: 'auth', component: AuthenticationPageComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
