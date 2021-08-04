import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AanadirComponent } from './Componentes/aanadir/aanadir.component';
import { AeditarComponent } from './Componentes/aeditar/aeditar.component';
import { AlistadoPorIdComponent } from './Componentes/alistado-por-id/alistado-por-id.component';
import { AlistadoComponent } from './Componentes/alistado/alistado.component';
import { LoginComponent } from './Componentes/login/login.component';
import { RegisterComponent } from './Componentes/Register/register.component';
import { ProdGuardServiceService } from './Servicios-Guard/prod-guard-service.service';


const routes: Routes = [
  { path: '', component: AlistadoComponent },
  { path: 'add', component: AanadirComponent, canActivate: [ProdGuardServiceService], data: { expectedRol: ['admin','user'] } },
  { path: 'edit/:id', component: AeditarComponent, canActivate: [ProdGuardServiceService], data: { expectedRol: ['admin'] } },
  { path: 'watch/:id', component: AlistadoPorIdComponent, canActivate: [ProdGuardServiceService], data: { expectedRol: ['admin', 'user'] } },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
