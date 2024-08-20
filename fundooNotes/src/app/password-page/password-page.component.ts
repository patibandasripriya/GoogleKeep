import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginserviceService } from '../Services/loginservice.service';
import { UserService } from '../Services/user.service';
import { Router } from '@angular/router'; 
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-password-page',
  templateUrl: './password-page.component.html',
  styleUrls: ['./password-page.component.scss']
})
export class PasswordPageComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private http:HttpClient ,private formBuilder:FormBuilder,private LoginServiceService:LoginserviceService,private userService:UserService, private route: Router) { } // Inject the Router module
  ngOnInit(): void {
      this.loginForm = this.formBuilder.group({
          password: ['', [Validators.required, Validators.minLength(8)]],
      });
  };
  
  get loginControl(){
    return this.loginForm.controls;
  }

  handleLogin(){
    if(this.loginForm.invalid) return;
    const {email, password}=this.loginForm.value;
    this.LoginServiceService.setPassword(password);
    const email1=this.LoginServiceService.getEmail();
    console.log(email1);
    console.log(email1,password);
    this.userService.loginAPICall({email:"qwerty123@samp.com",password:"qwerty123"}).subscribe({
      next:(res:any)=>{
       const {id} = res;
       console.log("response",id);
       localStorage.setItem("access_token",id);
       this.route.navigate(['./dashboard']);
      },
      error:(err: any) => {
        console.log("response",err);
      }
  });
}
}
