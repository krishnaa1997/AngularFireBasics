import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private service: AuthService, private route: Router) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      email:['', Validators.required],
      password:['', Validators.required]
    });
  }

  login()
  {
    this.service.login(this.loginForm.value).then(() =>{
      alert('Logged in Successfully');
      //console.log(this.service.getCurrentUserName());

      this.route.navigate(['/employee']);
    }).catch(error => {
      console.log(error);
      this.route.navigate(['/login']);
    });
  }

}
