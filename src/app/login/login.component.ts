import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, RequiredValidator} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm! : FormGroup ;

  constructor(private formBuilder : FormBuilder, private http :HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.loginForm= this.formBuilder.group({
      username:[''],
      password:['']
     })

  }
  login(){
    this.http.get<any>("http://127.0.0.1:8000/api/users.json")
    .subscribe (res =>{
     const user = res.find((a:any)=>{
       return a.username == this.loginForm.value.username
     });
    if (user){
      alert("succesfully connected !!");
      this.loginForm.reset();
      this.router.navigate(['accueil'])
    } else {
      alert("user not found !!")
    }
   }, err=>
   alert (" something went wrong !!")
   )};
}
