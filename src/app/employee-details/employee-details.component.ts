import { Component, OnInit } from '@angular/core';
import {Employee} from '../models/employee';
import {EmployeeServiceService} from '../services/employee-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Subscription} from 'rxjs';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  employees: Employee[];
  addEmployee: FormGroup;
  submitted: boolean=false;
  private fbSubs: Subscription[]=[];


  constructor(private service: EmployeeServiceService, private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
    this.fbSubs.push(this.service.getAllEmployees().subscribe(data=>{
      console.log(data);
    }));

    this.fbSubs.push(this.service.getAllEmployeesWithId().subscribe(data =>{
      this.employees= data.map(e=>{
        return {
          id: e.payload.doc.id,
          name: e.payload.doc.data()['name'],
          mobile: e.payload.doc.data()['mobile'],
          age: e.payload.doc.data()['age']
        };
      })
      console.log(this.employees);
    }));

    this.fbSubs.push(this.service.getEmployeeByName('krishna').valueChanges().subscribe(data=>{
      console.log(data);
    }));

    this.addEmployee= this.formBuilder.group({
      name: ['', Validators.required],
      mobile: ['', Validators.required],
      age:['', Validators.required]
    }); 
    
  }

  cancelSubscription()
  {
    this.fbSubs.forEach(sub => sub.unsubscribe());
  }

  add()
  {
    this.submitted=true;
    this.service.addEmployee(this.addEmployee.value);
    this.addEmployee.reset();
  }

  delete(employee: Employee)
  {
    console.log(employee.id);
    this.service.deleteEmployee(employee);
  }

  logOut()
  {
    this.cancelSubscription();
    this.authService.logOut();
  }

}
