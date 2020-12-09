import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MessageService } from '../MessageService';
import { Employee } from '../models/employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit{

  employeeId: number;
  employeeType : string;
  workingDays: number;
  vacationDays : number;
  vacationDaysUsed : number;
  employeeList: any = [];
  messages: any[] = [];
  updateFlag : boolean = false;
    subscription: Subscription;
    employee : Employee = {} as any;
  //displayedColumns:  ['Floor Number', 'SLot Number', 'Type', 'Status'];
  displayedColumns: string[] = ['Employee Id', 'Employee Type', 'Working Days', 'Vacation Days','Update Work Days','Update Vacation Days'];
  dataSource = new MatTableDataSource(this.employeeList);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private router: Router, public employeeService : EmployeeService,private messageService: MessageService) {
    // subscribe to home component messages
    this.subscription = this.messageService.getMessage().subscribe(message => {
      console.log(message);
        this.messages.push(message);
    });
    

}
ngOnInit(){
  this.employeeService.GetEmployeeData().subscribe((data: {}) => {
    this.employeeList = data;
  console.log( this.employeeList);
})
}
 
ngAfterViewInit() {
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
}

  
ngOnDestroy() {
  // unsubscribe to ensure no memory leaks
  this.subscription.unsubscribe();
}



book(){
}


work(data){
this.employeeService.employee = data;
this.router.navigate(['work']);
}

vacation(data){
  if(data.workingDays > 0){
    this.employeeService.employee = data;
    this.router.navigate(['vacation']);
  }else{
    alert("Please Update Working Days First..");
  }
  
}

}
