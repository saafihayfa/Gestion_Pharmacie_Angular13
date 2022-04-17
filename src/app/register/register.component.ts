import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm! : FormGroup ;

  constructor(private formBuilder : FormBuilder, private http :HttpClient, private router:Router) { }

  ngOnInit(): void {
   this.registerForm= this.formBuilder.group({
    username:['',Validators.required],
    name:['',Validators.required],
    email:['',Validators.required],
    password:['',Validators.required]
   })
  }

  register(){
    this.http.post<any>("http://127.0.0.1:8000/api/users.json",this.registerForm.value)
    .subscribe(res=>{
      alert("succes");
      this.registerForm.reset();
      this.router.navigate(['login'])
    }, err=> {
      alert ("echec")
    })


  }

}



