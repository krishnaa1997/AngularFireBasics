import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Employee } from '../models/employee';
import { AuthService } from './auth.service';
// import {map} from 'rxjs/Operator';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService implements OnInit {

  constructor(private db: AngularFirestore, private authService : AuthService) { }

  ngOnInit(){
    this.authService.initAuthListner();
  }

  getAllEmployees(){   // without ID
      return this.db.collection('employee').valueChanges();
  }
  getAllEmployeesWithId(userId: string)
  {
    console.log('In get');
    console.log(userId);
    return this.db.collection('employee');
  }
  getEmployeeByName()
  {
    return this.db.collection('employee',ref => ref.where('mobile','==',7987494902));
  }
  addEmployee(employee: Employee)
  {
    employee.userId=this.authService.userId;
    console.log(employee);
    return this.db.collection('employee').add(employee);
  }
  deleteEmployee(employee: Employee)
  {
    this.db.doc('employee/' + employee.id).delete();
  }
}
