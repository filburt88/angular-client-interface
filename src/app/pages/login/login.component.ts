import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
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

  
  constructor(private loginservice: LoginserviceService, private route : Router ) { }

  user:User = {
    email: '',
    password: '',
  }

    login(){
      this.user = this.loginform.value
      console.log(this.user.email)
      this.loginservice.login (this.user.email, this.user.password).subscribe(  resp => {
      console.log(resp);
/*       let userlogueado : User = {
        email : resp.email,
        id : resp.id

      }  COMO HACER PARA TENER UN OBJETO PARA TODOS LOS COMPONENTES  */
      localStorage.setItem('userLogued', JSON.stringify(resp.id));
      this.route.navigate(['/inicio'])
    } )
  } 

}
