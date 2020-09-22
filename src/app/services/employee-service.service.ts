import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
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
}
