import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AttendanceMonitoringSystemComponent } from './attendance-monitoring-system/attendance-monitoring-system.component';

const routes: Routes = [
  {path: '', redirectTo: 'attendance-monitoring-system', pathMatch: 'full'},
  {path: 'attendance-monitoring-system', component: AttendanceMonitoringSystemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
