import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Travel } from '../../models/travel';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-ordenar-viaje',
  templateUrl: './ordenar-viaje.component.html',
  styleUrls: ['./ordenar-viaje.component.sass']
})
export class OrdenarViajeComponent implements OnInit {

  orderForm = new FormGroup({
    mark : new FormControl('', Validators.required),
    model : new FormControl('', [Validators.required]),
    failure : new FormControl('', Validators.required),
  })

  constructor(private travel:OrderService) { }

  order:Travel = {
    clientId: 0,
    mark: '',
    model: '',
    failure: ''
  }


  ngOnInit(): void {
  }

  registrarTravel():void{
    this.order = this.orderForm.value;
    console.log(this.order)
    this.order.clientId = Number(localStorage.getItem('userLogued'))
    this.travel.save(this.order).subscribe( resp => {
      alert("Su Orden ha sido Registrada")
      localStorage.setItem('viajeEnviado', 'true')
    });
    this.orderForm.reset()
  }

}
