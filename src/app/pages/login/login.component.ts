import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  loginform = new FormGroup({
    email : new FormControl('', Validators.required),
    password : new FormControl('', [Validators.required]),
  })

  constructor() { }

  ngOnInit(): void {
  }

}
