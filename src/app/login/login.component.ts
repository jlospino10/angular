import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 constructor(private formBuilder: FormBuilder){
     this.form = formBuilder.group({
      firstname: [''],
      lastname: [''],
      email: [''],
      message: [''],
 
    });
  }

  ngOnInit(): void {
  }
   

}
 
