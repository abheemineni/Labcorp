import { Component, HostListener, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Subscription } from 'rxjs';
import { MessageService } from './MessageService';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  messages: any[] = [];
    subscription: Subscription;
    flag : boolean = false;

    constructor(private messageService: MessageService,public employeeService : EmployeeService) {
        // subscribe to home component messages
        this.subscription = this.messageService.getMessage().subscribe(message => {
            this.messages.push(message);
        });
    }

    disable(){
      this.flag = true;
    }
    ngOnDestroy() {
      // unsubscribe to ensure no memory leaks
      this.subscription.unsubscribe();
  }
}
