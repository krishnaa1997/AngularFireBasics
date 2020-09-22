import { mapToMapExpression } from '@angular/compiler/src/render3/util';
import { Component, OnInit } from '@angular/core';
// import { AngularFirestore } from 'angularfire2/firestore';
//import { Map } from 'rxjs/Operator';
import {EmployeeServiceService} from '../services/employee-service.service';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private service: EmployeeServiceService) { }

  ngOnInit(): void {
    this.service.getAllEmployees().subscribe(data=>{
      console.log(data);
    });
    this.service.getAllEmployeesWithId().subscribe(data=>{
      console.log(data.map(d=>{
        return d.payload.doc.id;
      }));
    });
    
  }

}
