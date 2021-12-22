import { Component, OnInit, OnChanges, ViewChild } from '@angular/core';
import { StatusTableService } from 'src/app/services/status-table.service';
import { StatusTravel } from '../../models/statustravel';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';





@Component({
  selector: 'app-status-datatable',
  templateUrl: './status-datatable.component.html',
  styleUrls: ['./status-datatable.component.sass']
})


export class StatusDatatableComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = ['mark', 'model', 'statusTravel', 'statusEquipment'];

  datoslista: StatusTravel[] = [];
  dataSource = new MatTableDataSource(this.datoslista);

  constructor(private status:StatusTableService ) { }

  ngOnInit(){
    this.status.estadodelviaje().subscribe(resp =>{
      for(let viaje of resp){
        this.datoslista.push(viaje);
      }
      console.log(this.datoslista)
      this.dataSource.paginator = this.paginator;
    })
  }

/*   ngOnChanges() {
    if(localStorage.getItem('viajeEnviado') ){
      console.log(localStorage.getItem('viajeEnviado'))
      this.status.estadodelviaje().subscribe(resp =>{
        let respuesta = JSON.stringify(resp)
        JSON.parse(respuesta);
        this.dataSource = JSON.parse(respuesta)
      })
    }
  } */
}
