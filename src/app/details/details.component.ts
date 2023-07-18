import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  regForm: any;
  registration:any;
employees: any=[]   
  constructor(private router:ActivatedRoute) {  // Creating a constructor for the component that initializes the "router" from ActivatedRoute
    this.getemployee() 
  }
  ngOnInit(): void { // Implementing the "OnInit" lifecycle hook to initialize the component when it is loaded
 
  }

  update (employees:any) { // "update" method that takes "employees" as a parameter
    this.regForm=employees // sets the "regForm" property with the "employees" value
    localStorage.setItem('employees',JSON.stringify(employees)) // stores the "employees" data in the localStorage
    window.location.href='./updatedata' //Navigates to '/updatedata' URL:
   }


getemployee() { // Defining a method "getemployee" that sends a GET request to 'http://localhost:3000/employeer/employees' and logs the result in the console, and sets the "employees" property with the fetched data
fetch("http://localhost:5000/employeer/employees", {
 method:'get',
 headers:{
  "Access-Contol-Allow-Origin": "*",
 },
}).then(res=> res.json())
.then(result=>{ 
 console.log(result)
 this.employees=result.employees // this refers to the component itself for which the template was rendered. On the template you can access only members of the component. This means that this is implicitly added to each property which you use in the template. 
console.log(this.employees)
}).catch(err =>
console.log(err))
}

remove(Name: any) { // Defining a method "remove" that takes "Firstname" as a parameter, sends a DELETE request to 'http://localhost:3000/employeer/deletedata/' + Firstname, and logs the result in the console
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      fetch("http://localhost:5000/employeer/deletedata/" + Name, { 
     method:'delete', // Method Name 
     headers:{
      "Access-Contol-Allow-Origin": "*",
      "content-Type":'application/json'
     },
   }).then(res=> res.json()) // converts result into json format
   .then(result=>{ 
     console.log(result) // Displays the Result in Console
  

      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
     // alert('Employee Data Deleted Succesfully') // Gives An Alert Message With Ok
    }).catch(err => // Display The Error
      console.log(err)) 
    }
  })
  
 } 
}