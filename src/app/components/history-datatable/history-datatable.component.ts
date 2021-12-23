import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { StatusTableService } from 'src/app/services/status-table.service';
import { StatusTravel } from '../../models/statustravel';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

const datoslista: StatusTravel[] = [

];

@Component({
  selector: 'app-history-datatable',
  templateUrl: './history-datatable.component.html',
  styleUrls: ['./history-datatable.component.sass']
})
export class HistoryDatatableComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;  

  displayedColumns: string[] = ['mark', 'model', 'statusTravel', 'statusEquipment', 'date'];

 constructor(private status:StatusTableService ) { }
  datosLista:StatusTravel[] = []
  dataSource =  new MatTableDataSource<StatusTravel>(this.datosLista)


  
  ngOnInit(): void {
    this.status.estadodelviaje().subscribe(resp =>{
      for(let viaje of resp){
        if(viaje.travelEquipmentDTOs[viaje.travelEquipmentDTOs.length - 1].statusTravel === 5 || viaje.travelEquipmentDTOs[viaje.travelEquipmentDTOs.length - 1].statusTravel === 8){
        this.datosLista.push(viaje);
        }
      }
      this.datosLista.reverse()
      this.dataSource.paginator = this.paginator;
    })
  }

  refresh(){
    this.status.estadodelviaje().subscribe(resp =>{
      for(let viaje of resp){
        this.datosLista.push(viaje);
      }
      this.datosLista.reverse()
    })
    this.dataSource = new MatTableDataSource(this.datosLista);
    this.dataSource.paginator = this.paginator;
  }

}