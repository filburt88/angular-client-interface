import { Component, OnInit, ViewChild } from '@angular/core';
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

  refresh(){
    this.status.estadodelviaje().subscribe(resp =>{
      for(let viaje of resp){
        this.datoslista.push(viaje);
      }
      this.datoslista.reverse()
    })
    this.dataSource = new MatTableDataSource(this.datoslista);
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(){
    this.status.estadodelviaje().subscribe(resp =>{
      for(let viaje of resp){
        this.datoslista.push(viaje);
      }
      this.datoslista.reverse()
      this.dataSource.paginator = this.paginator;
    })
  }
}
