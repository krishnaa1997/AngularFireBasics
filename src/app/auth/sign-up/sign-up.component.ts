import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private service: AuthService, private route: Router ) { }

  ngOnInit(): void {
    this.registerForm=this.formBuilder.group({
      email:['', Validators.required],
      password:['', Validators.required]
    });
  }

  register()
  {
    this.service.register(this.registerForm.value).then(()=>{
      alert('successfully registered on firebase');
      //console.log(this.service.authState);
      this.route.navigate(['/employee']);
    }).catch(error =>{
      console.log(error);
      this.route.navigate(['/signup']);
    });
  }

}
