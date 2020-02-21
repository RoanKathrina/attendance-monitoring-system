import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AttendanceMonitoringSystemComponent } from './attendance-monitoring-system/attendance-monitoring-system.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
    ],
  declarations: [
    AppComponent, 
    AttendanceMonitoringSystemComponent
    ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
