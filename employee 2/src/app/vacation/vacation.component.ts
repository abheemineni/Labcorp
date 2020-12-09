import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../models/employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-vacation',
  templateUrl: './vacation.component.html',
  styleUrls: ['./vacation.component.css']
})
export class VacationComponent implements OnInit {

  employee : Employee;
  constructor(private router: Router, public employeeService : EmployeeService) { 
    this.employee = employeeService.employee;
  }

  ngOnInit(): void {
  }

  update(){
    if(this.employee.vacationDaysUsed < 0 || this.employee.vacationDaysUsed > this.employee.vacationDays){
      alert("Please Enter Vacation Days between 0 to " + this.employee.vacationDays)
    }else{
      this.employeeService.updateVacationDays(this.employee).subscribe((data: {}) => {
        console.log(data);
        this.homePageRouting(); 
      })
    }

  }

  private homePageRouting() {
    console.log("Navigating to Home Page...");
    this.router.navigate(['home']);
  }

}
