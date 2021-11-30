import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { User } from 'src/app/models/user';
import { LoginserviceService } from 'src/app/services/loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {

   loginform = new FormGroup({
    email : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required),
  }) 

  
  constructor(private loginservice: LoginserviceService ) { }

  user:User = {
    email: '',
    password: '',
  }

    login(){
      this.user = this.loginform.value
      console.log(this.user.email)
      this.loginservice.login (this.user.email, this.user.password).subscribe(  resp => {
      console.log(resp);
      localStorage.setItem('userLogued', JSON.stringify(resp.id));
      let email = localStorage.getItem('UserLogued');
      console.log(email);
    } )
  }

}
