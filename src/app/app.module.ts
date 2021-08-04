import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modulos/material/material.module';
import { ToolbarComponent } from './Componentes/toolbar/toolbar.component';
import { AanadirComponent } from './Componentes/aanadir/aanadir.component';
import { AlistadoComponent } from './Componentes/alistado/alistado.component';
import { AeditarComponent } from './Componentes/aeditar/aeditar.component';
import { AborrarComponent } from './Componentes/aborrar/aborrar.component';
import{ServiciosService} from '../app/Servicios/servicios.service';
import{HttpClient, HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AlistadoPorIdComponent } from 'src/app/Componentes/alistado-por-id/alistado-por-id.component';
import { LoginComponent } from './Componentes/login/login.component';
import { RegisterComponent } from './Componentes/Register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServiciosInterceptorService } from './Servicios-interceptor/servicios-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    AanadirComponent,
    AlistadoComponent,
    AeditarComponent,
    AborrarComponent,
    AlistadoPorIdComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [ServiciosService,ServiciosInterceptorService],
  bootstrap: [AppComponent],
})
export class AppModule { }
