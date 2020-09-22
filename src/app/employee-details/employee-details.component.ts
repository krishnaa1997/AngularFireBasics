import { Component, OnInit } from '@angular/core';
import {Employee} from '../models/employee';
import {EmployeeServiceService} from '../services/employee-service.service';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  employees: Employee[];

  constructor(private service: EmployeeServiceService) { }

  ngOnInit(): void {
    this.service.getAllEmployees().subscribe(data=>{
      console.log(data);
    });

    this.service.getAllEmployeesWithId().subscribe(data =>{
      this.employees= data.map(e=>{
        return {
          id: e.payload.doc.id,
          name: e.payload.doc.data()['name'],
          mobile: e.payload.doc.data()['mobile'],
          age: e.payload.doc.data()['age']
        };
      })
      console.log(this.employees);
    });

    this.service.getEmployeeByName('krishna').valueChanges().subscribe(data=>{
      console.log(data);
    });
    
  }

}
