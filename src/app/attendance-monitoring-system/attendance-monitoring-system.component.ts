import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attendance-monitoring-system',
  templateUrl: './attendance-monitoring-system.component.html',
  styleUrls: ['./attendance-monitoring-system.component.css']
})
export class AttendanceMonitoringSystemComponent implements OnInit {
  
  dateToday;

  constructor() { }

  ngOnInit() {
    const date = new Date();
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    this.dateToday = `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDay()}, ${date.getFullYear()}`
  }

}