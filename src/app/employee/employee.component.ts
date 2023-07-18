import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

  export class EmployeeComponent implements OnInit {
    regForm: any;
    registration:any;
  employees: any=[]   
    constructor(private router:ActivatedRoute) {  // Creating a constructor for the component that initializes the "router" from ActivatedRoute
 
    }
    ngOnInit(): void { // Implementing the "OnInit" lifecycle hook to initialize the component when it is loaded
      
        this.regForm = new FormGroup({
          Name: new FormControl(""),
          Company: new FormControl(""),
          Mobile: new FormControl(""),
          Email: new FormControl(""),
          Salary: new FormControl(""),
          Projectname: new FormControl("")
        })
    }

    

    show() { // Defining a method "show" that sends a POST request to 'http://localhost:3000/employeer/adddata' with the data from "regForm" and logs the result in the console
      console.log(this.regForm.value)
      fetch("http://localhost:5000/employeer/adddata", {
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
