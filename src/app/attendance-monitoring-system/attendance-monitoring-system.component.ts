import { Component, OnInit } from '@angular/core';

import employees from '../json/employees.json';

@Component({
  selector: 'app-attendance-monitoring-system',
  templateUrl: './attendance-monitoring-system.component.html',
  styleUrls: ['./attendance-monitoring-system.component.css']
})
export class AttendanceMonitoringSystemComponent implements OnInit {
  
  dateToday;
  employees = employees;
  employeeToBeTransferred = '';

  constructor() { }

  ngOnInit() {
    const date = new Date();
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    this.dateToday = `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDay()}, ${date.getFullYear()}`
  }

  setBackgroundColor(element: string, employee) {
    const elementSelected = document.getElementById(element) as HTMLElement;
    // let i = 0, otherElement;
    // for(i=0; i < employees.employees.length; i++) {
    //   otherElement = document.getElementById('employee_' + i) as HTMLElement;
    //   otherElement.style.setProperty('background-color', 'white');
    // }
    let otherElement;
    employees.employees.forEach((item, index) => {
      otherElement = document.getElementById('employee_' + index) as HTMLElement;
      otherElement.style.setProperty('background-color', 'white');
    })
    elementSelected.style.setProperty('background-color', 'red');
    this.employeeToBeTransferred = `${employee.first_name}, ${employee.last_name}`;
  }

}