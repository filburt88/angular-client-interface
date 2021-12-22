import { Component, OnInit, AfterViewInit } from '@angular/core';
import { StatusTableService } from 'src/app/services/status-table.service';
import { StatusTravel } from '../../models/statustravel';
import { MatTableDataSource } from '@angular/material/table';

const datoslista: StatusTravel[] = [

];

@Component({
  selector: 'app-history-datatable',
  templateUrl: './history-datatable.component.html',
  styleUrls: ['./history-datatable.component.sass']
})
export class HistoryDatatableComponent implements OnInit {

  

  displayedColumns: string[] = ['mark', 'model', 'statusTravel', 'statusEquipment', 'date'];

 constructor(private status:StatusTableService ) { }
  dataSource =  new MatTableDataSource<StatusTravel>(undefined)


  
  ngOnInit(): void {
    this.status.estadodelviaje().subscribe(resp =>{
      let respuesta = JSON.stringify(resp)
      JSON.parse(respuesta);
      this.dataSource = JSON.parse(respuesta)
      
    })
    
  }
ngAfterViewInit(){}
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}