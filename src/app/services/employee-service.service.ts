import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Employee } from '../models/employee';
// import {map} from 'rxjs/Operator';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private db: AngularFirestore) { }

  getAllEmployees(){   // without ID
      return this.db.collection('employee').valueChanges();
  }
  getAllEmployeesWithId()
  {
    return this.db.collection('employee').snapshotChanges();
  }
  getEmployeeByName(name)
  {
    return this.db.collection('employee',ref => ref.where('name','==',name));
  }
  addEmployee(employee)
  {
    return this.db.collection('employee').add(employee);
  }
  deleteEmployee(employee: Employee)
  {
    this.db.doc('employee/' + employee.id).delete();
  }
}
