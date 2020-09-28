import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Router} from '@angular/router';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //authState: any=null;
  isAuthenticated: boolean=true;
  userId: string;
  userMailId: string;

  constructor(private fauth: AngularFireAuth, private route: Router) {

   }

   googleLogin()
   {
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.GoogleAuthProvider();
      //this.fauth.auth.
      this.fauth.auth
      .signInWithPopup(provider)
      .then(res => {
        this.isAuthenticated=true;
        alert("Logged in successfully");
        resolve(res);
      }, err => {
        console.log(err);
        reject(err);
      })
    })
   }

   register(registerForm)
   {
     
     return this.fauth.auth.createUserWithEmailAndPassword(registerForm.email,registerForm.password).then((user)=>{
       //this.authState=user;
       console.log(user);
       this.isAuthenticated=true;
     }).catch(error =>{
       console.log(error);
       throw error;
     });
   }
   login(loginForm)
   {
    return this.fauth.auth.signInWithEmailAndPassword(loginForm.email,loginForm.password).then((user)=>{
      //this.authState=user;
      //console.log(user);
      this.userId=user.user.uid;

      this.isAuthenticated=true;
    }).catch(error =>{
      console.log(error);
      throw error;
    });
   }

   initAuthListner()
   {
    this.fauth.authState.subscribe(user =>{
      if(user)
      {
        this.isAuthenticated=true;
        this.userId=user.uid;
        this.route.navigate(['/employee']);
        //this.userMailId=user.email;
        console.log(this.userId);
        
        
        
      }
      else{
        this.isAuthenticated=false;
        this.route.navigate(['/login']);
        console.log('In the else part');
        //console.log(user.uid == null ? 'nothing is there':user.uid);
      }
    }
    );
   }

   isAuth()
   {
     return this.isAuthenticated;
   }

   logOut()
   {
     this.fauth.auth.signOut();
     //this.isAuthenticated=false;
     
   }

  
}
