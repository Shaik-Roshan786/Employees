import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  regForm: any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.regForm = this.formBuilder.group({
      Email: ['', Validators.required],
      Password: ['', Validators.required]
    });
  }

  login() {
    console.log(this.regForm.value)
    fetch("http://localhost:5000/signup/logindetails", {
     method:'post',
     headers:{
      "Access-Contol-Allow-Origin": "*",
      "content-Type":'application/json'
     },
     body:JSON.stringify(this.regForm.value)
   }).then(res=> res.json())
   .then(result=>{ 
     console.log(result)
     window.location.href = './home';
   console.log(this.regForm)
  }).catch(err =>
    console.log(err))
} 


}
