import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { HistoryDataTableDataSource, HistoryDataTableItem } from './history-data-table-datasource';

@Component({
  selector: 'app-history-data-table',
  templateUrl: './history-data-table.component.html',
  styleUrls: ['./history-data-table.component.css']
})
export class HistoryDataTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<HistoryDataTableItem>;
  dataSource: HistoryDataTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['fecha', 'marca', 'modelo', 'estadoDelEquipo', 'estadoDelEnvio', 'entregado'];

  constructor() {
    this.dataSource = new HistoryDataTableDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
