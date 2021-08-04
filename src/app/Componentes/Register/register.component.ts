import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NuevoUsuario } from 'src/app/modelos/Security/nuevo-usuario';
import { ServiciosService } from 'src/app/Servicios/servicios.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  nuevoUsuario: NuevoUsuario;
  nombre: string;
  nombreUsuario: string;
  email: string;
  password: string;
  errMsj: string;
  isLogged = false;

  constructor(
    private servicios: ServiciosService,
    private router: Router,
  ) { }

  ngOnInit() {
    if (this.servicios.getToken()) {
      this.isLogged = true;
    }
  }

  onRegister(): void {
    this.nuevoUsuario = new NuevoUsuario(this.nombre, this.nombreUsuario, this.email, this.password);
    this.servicios.nuevoUsuario(this.nuevoUsuario).subscribe(
      data => {
 
        this.router.navigate(['/login']);
      },
      err => {
        this.errMsj = err.error.mensaje;
       console.log(err.error.message);
      }
    );
  }

}
