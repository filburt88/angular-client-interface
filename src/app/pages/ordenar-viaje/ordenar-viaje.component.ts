import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-ordenar-viaje',
  templateUrl: './ordenar-viaje.component.html',
  styleUrls: ['./ordenar-viaje.component.sass']
})
export class OrdenarViajeComponent implements OnInit {

  orderForm = new FormGroup({
    marca : new FormControl('', Validators.required),
    modelo : new FormControl('', [Validators.required]),
    falla : new FormControl('', Validators.required),
    direccion : new FormControl('', Validators.required),
    fecha : new FormControl('', Validators.required),
    horario : new FormControl('', Validators.required)
  })

  constructor() { }

  ngOnInit(): void {
  }

}
