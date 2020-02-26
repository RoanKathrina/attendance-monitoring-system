import { Component, OnInit, AfterViewInit, ChangeDetectorRef} from '@angular/core';

import employees from '../json/employees.json';

@Component({
  selector: 'app-attendance-monitoring-system',
  templateUrl: './attendance-monitoring-system.component.html',
  styleUrls: ['./attendance-monitoring-system.component.css']
})
export class AttendanceMonitoringSystemComponent implements OnInit, AfterViewInit{
  
  dateToday;
  present_list: Array<any> = [...employees.employees];
  absent_list: Array<any> = [];
  fromList: string = 'present';  
  employeeToBeTransferred: {};
  positionOfEmployeeToBeTransferred: number = 0;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    const date = new Date();
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    this.dateToday = `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
  }

  ngAfterViewInit() {
    //Select the first element of the Present List
    let elementSelected: HTMLElement;
    elementSelected = document.getElementById('present_0') as HTMLElement;
    elementSelected.style.setProperty('background-color', 'red', 'important');
    this.employeeToBeTransferred = this.present_list[0];
    this.positionOfEmployeeToBeTransferred = 0;
    this.fromList = 'present';
  }

  setValues(element: string, employee, fromList, position) {
    const elementSelected = document.getElementById(element) as HTMLElement;

    // Set the background color of Present List to white
    // Set the background color of the Absent List to white    
    this.clearColorOfTables();

    elementSelected.style.setProperty('background-color', 'red');
    this.employeeToBeTransferred = employee;
    this.positionOfEmployeeToBeTransferred = position;
    this.fromList = fromList;
  }

  clearColorOfTables() {
    let otherElement;

    this.present_list.forEach((item, index) => {
      otherElement = document.getElementById('present_' + index) as HTMLElement;
      otherElement.style.setProperty('background-color', 'white');
    })

    this.absent_list.forEach((item, index) => {
      otherElement = document.getElementById('absent_' + index) as HTMLElement;
      otherElement.style.setProperty('background-color', 'white');
    })
  }

  transferNameToAbsent() {
    // Clear background color of Present List
    // Clear background color of Absent List
    if(this.fromList === 'absent') {
      return;
    }
    else {
      // Add the name to the Absent List
      // Delete the name in the Present List
      this.clearColorOfTables();

      this.absent_list.push(this.employeeToBeTransferred);
      this.present_list.splice(this.positionOfEmployeeToBeTransferred, 1);
      this.cdr.detectChanges();
      // Set the selected to the first element in Present List
      // If the length of Present List equal to 0
        // Select the first element of the Absent List
      // If the length of Present List NOT equal to 0
        // Select the first element of the Present List

      const presentListLen = this.present_list.length;
      let elementSelected: HTMLElement;

      if (presentListLen === 0) {
        elementSelected = document.getElementById('absent_0') as HTMLElement;
        elementSelected.style.setProperty('background-color', 'red', 'important');

        this.employeeToBeTransferred = this.absent_list[0];
        this.positionOfEmployeeToBeTransferred = 0;
        this.fromList = 'absent';
      }
      else {
        elementSelected = document.getElementById('present_0') as HTMLElement;
        elementSelected.style.setProperty('background-color', 'red', 'important');
        this.employeeToBeTransferred = this.present_list[0];
        this.positionOfEmployeeToBeTransferred = 0;
        this.fromList = 'present';
      }
    }
  }

  transferNameToPresent() {
    if(this.fromList === 'present') {
      return;
    }
    else {
      // Add the name to the Present List
      // Delete the name in the Absent List
      this.clearColorOfTables();
      this.present_list.push(this.employeeToBeTransferred);
      this.absent_list.splice(this.positionOfEmployeeToBeTransferred, 1);
      this.cdr.detectChanges();
      // Set the selected to the first element of the Absent List
      // If the length of Absent List is equal to 0
        // Select the first element of the Present List
      // If the length of the Absent List NOT equal to 0
        // Select the first element of the Absent fromList
      const absentListLen = this.absent_list.length;
      let elementSelected: HTMLElement;
      if(absentListLen === 0) {
        elementSelected = document.getElementById('present_0') as HTMLElement;
        elementSelected.style.setProperty('background-color', 'red', 'important');
        this.employeeToBeTransferred = this.present_list[0];
        this.positionOfEmployeeToBeTransferred = 0;
        this.fromList = 'present';
      }
      else {
        elementSelected = document.getElementById('absent_0') as HTMLElement;
        elementSelected.style.setProperty('background-color', 'red', 'important');
        this.employeeToBeTransferred = this.absent_list[0];
        this.positionOfEmployeeToBeTransferred = 0;
        this.fromList = 'absent';
      }
    }
  }

  saveToSessionStorage() {
    const JSONObj = {
      "date": this.dateToday,
      "present": this.present_list,
      "absent": this.absent_list
    }
    window.sessionStorage.setItem('attendance', JSON.stringify(JSONObj));
  }

  setPresentclearAbsent() {
    const confirmRes = window.confirm('Are you sure you want to reset Present List to its initial value?');
    if (confirmRes === false) {
      return;
    }
    else {
      this.present_list = [...employees.employees];
      this.absent_list = [];
      this.cdr.detectChanges();
      this.clearColorOfTables();
      this.ngAfterViewInit();
    }
  }
}