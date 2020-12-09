import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../models/employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  employee : Employee;
  constructor(private router: Router, public employeeService : EmployeeService) { 
    this.employee = employeeService.employee;
  }

  ngOnInit(): void {
  }

  update(){

    if(this.employee.workingDays < 0 || this.employee.workingDays > 260){
      alert("Please Enter Working Days between 0 to 260")
    }else{
      this.employeeService.UpdateWorkDays(this.employee).subscribe((data: {}) => {
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
