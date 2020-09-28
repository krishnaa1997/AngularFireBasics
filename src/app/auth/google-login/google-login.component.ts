import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-google-login',
  templateUrl: './google-login.component.html',
  styleUrls: ['./google-login.component.css']
})
export class GoogleLoginComponent implements OnInit {

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }

}
