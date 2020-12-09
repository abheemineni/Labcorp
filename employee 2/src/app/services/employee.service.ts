import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  // Base url
  baseurl = 'http://localhost:8080/v1/employee';
  employee : any;



  constructor(private http: HttpClient) { }

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  }

  

  UpdateWorkDays(data): Observable<Employee> {
    
    const url = this.baseurl + '/work/' + data.employeeId;
    console.log(url);
    return this.http.put<Employee>(url, JSON.stringify(data), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }  

  updateVacationDays(data): Observable<Employee> {
    
    const url = this.baseurl + '/vacation/' + data.employeeId;
    console.log(url);
    return this.http.put<Employee>(url, JSON.stringify(data), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }  
  

 



  // GET
  GetEmployeeData(): Observable<Employee> {
      const url = this.baseurl + '/employee-list';
      console.log(url);
    return this.http.get<Employee>(url)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

 

  
  // Error handling
  errorHandl(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     console.log(errorMessage);
     return throwError(errorMessage);
  }

}