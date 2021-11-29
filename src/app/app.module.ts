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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent,
    LoginComponent,
    OrdenarViajeComponent,
    EstadoViajesComponent,
    HistorialViajesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
