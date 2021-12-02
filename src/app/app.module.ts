import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';
import { MaterialModule } from './material/material.module';
import { OrdenarViajeComponent } from './pages/ordenar-viaje/ordenar-viaje.component';
import { EstadoViajesComponent } from './pages/estado-viajes/estado-viajes.component';
import { HistorialViajesComponent } from './pages/historial-viajes/historial-viajes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DataTableComponent } from './components/data-table/data-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { HistoryDataTableComponent } from './components/history-data-table/history-data-table.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { StatusDatatableComponent } from './components/status-datatable/status-datatable.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent,
    LoginComponent,
    OrdenarViajeComponent,
    EstadoViajesComponent,
    HistorialViajesComponent,
    DataTableComponent,
    HistoryDataTableComponent,
    StatusDatatableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
