import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  regForm: any;

employees: any=[]  

  constructor() { }

  ngOnInit(): void {
    this.regForm = new FormGroup({
      Name: new FormControl(""),
      Mobile: new FormControl(""),
      Email: new FormControl(""),
      Password: new FormControl(""),
      
    })
  }

  signup() {
    console.log(this.regForm.value)
      fetch("http://localhost:5000/signup/signupdetails", {
       method:'post',
       headers:{
        "Access-Contol-Allow-Origin": "*",
        "content-Type":'application/json'
       },
       body:JSON.stringify(this.regForm.value)
     }).then(res=> res.json())
     .then(result=>{ 
       console.log(result)
     console.log(this.regForm)
    }).catch(err =>
      console.log(err))
  }     
  }

