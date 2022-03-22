import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-userLogin',
  templateUrl: './userLogin.component.html',
  styleUrls: ['./userLogin.component.css']
})
export class UserLoginComponent implements OnInit {
flag:boolean=false;

  user:User=new User();
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  checkLogin(loginForm:NgForm){
    if(loginForm.valid){
      if(this.user.userName=="Madhu" && this.user.userPassword=="lti@123"){
        //alert("login Successful");
        console.log("login Successful");
        this.router.navigate(['/user-dashboardLink']);
        this.flag=true;
      }
      else if(this.flag==true){
      this.router.navigate(['/']);

      }
      else{
        console.log("Incorrect Credentials");
        //alert("Incorrect Credentials");
        this.router.navigate(['/loginFailedLink']);
      }
    }
    else{
      alert("Please enter all credentials");
    }
  }


}
