import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { LoginserviceService } from 'src/app/services/loginservice.service';
import Swal from 'sweetalert2';

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
      this.loginservice.login (this.user.email, this.user.password).subscribe(  resp => {
      localStorage.setItem('userLogued', JSON.stringify(resp.id));
      this.route.navigate(['/inicio'])
    }, (error) =>{
      Swal.fire(
        'Error en el Ingreso',
        'Verifica los datos ingresados',
        'error'
      )
    } )
  } 

}
