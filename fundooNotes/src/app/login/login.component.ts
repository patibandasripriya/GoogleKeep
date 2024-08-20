import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { LoginserviceService } from '../Services/loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private formbuilder: FormBuilder,private loginServiceService:LoginserviceService) {}

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }
  get loginControl(){
    return this.loginForm.controls;
  }

  handleLogin(){
    if(this.loginForm.invalid) return;
    const {email}=this.loginForm.value;
    this.loginServiceService.setEmail(email);
    console.log(email);
  }
}
