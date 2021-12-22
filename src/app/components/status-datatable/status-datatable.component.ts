import { Component, OnInit, ViewChild, AfterViewInit, OnChanges } from '@angular/core';
import { StatusTableService } from 'src/app/services/status-table.service';
import { StatusTravel } from '../../models/statustravel';
import { MatTableDataSource } from '@angular/material/table';



const datoslista: StatusTravel[] = [

];

@Component({
  selector: 'app-status-datatable',
  templateUrl: './status-datatable.component.html',
  styleUrls: ['./status-datatable.component.sass']
})


export class StatusDatatableComponent implements OnChanges {
  displayedColumns: string[] = ['mark', 'model', 'statusTravel', 'statusEquipment'];
  dataSource = new MatTableDataSource(datoslista);


  constructor(private status:StatusTableService ) { }

  ngOnInit(){
    this.status.estadodelviaje().subscribe(resp =>{
      let respuesta = JSON.stringify(resp)
      JSON.parse(respuesta);
      this.dataSource = JSON.parse(respuesta)

    })
  }

  ngOnChanges() {
    if(localStorage.getItem('viajeEnviado') ){
      console.log(localStorage.getItem('viajeEnviado'))
      this.status.estadodelviaje().subscribe(resp =>{
        let respuesta = JSON.stringify(resp)
        JSON.parse(respuesta);
        this.dataSource = JSON.parse(respuesta)
  
      })
    }
  }
}
