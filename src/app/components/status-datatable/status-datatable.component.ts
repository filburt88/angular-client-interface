import { Component, OnInit } from '@angular/core';
import { StatusTableService } from 'src/app/services/status-table.service';
import { StatusTravel } from '../../models/statustravel';



const datoslista: StatusTravel[] = [

];

@Component({
  selector: 'app-status-datatable',
  templateUrl: './status-datatable.component.html',
  styleUrls: ['./status-datatable.component.sass']
})


export class StatusDatatableComponent implements OnInit {
  displayedColumns: string[] = ['mark', 'model', 'statusTravel', 'statusEquipment', 'date'];
  

  constructor(private status:StatusTableService ) { }
  dataSource = datoslista;
  ngOnInit(): void {
    this.status.estadodelviaje().subscribe(resp =>{
      let respuesta = JSON.stringify(resp)
      JSON.parse(respuesta);
      this.dataSource = JSON.parse(respuesta)
    })
  }

}
