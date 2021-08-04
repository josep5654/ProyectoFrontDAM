import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alimentos } from 'src/app/modelos/Alimentos';
import { ServiciosService } from 'src/app/Servicios/servicios.service';

@Component({
  selector: 'app-alistado',
  templateUrl: './alistado.component.html',
  styleUrls: ['./alistado.component.css']
})
export class AlistadoComponent implements OnInit {
  isLogged = false;
  nombreUsuario = '';

  alimentos: Alimentos[];
  roles: string[];
  isAdmin = false;
  constructor(private servicio: ServiciosService, private router: Router) { }

  ngOnInit() {
    if (this.servicio.getToken()) {
      this.isLogged = true;
      this.nombreUsuario = this.servicio.getUserName();
      this.servicio.getAllProductos()
        .subscribe(data => {
         this.alimentos = data;
        })
    } else {
      this.isLogged = false;
      this.nombreUsuario = '';
    }
    this.roles = this.servicio.getAuthorities();
    this.roles.forEach(rol=>{
      if(rol ==='ROLE_ADMIN'){
      this.isAdmin=true;
    }
    
    })


  }
 

  EditarEsteProducto(id: number) {
    console.log(id);
    //localStorage.setItem("id",productos.id.toString());
    this.router.navigate([`edit/${id}`]);
  }
  ConsultarAlimento(id: number) {
    console.log(id);
    //localStorage.setItem("id",productos.id.toString());
    this.router.navigate([`watch/${id}`]);
  }

  DeleteP(alimento: Alimentos) {

    this.servicio.delProducto(alimento)
      .subscribe(data => {
        this.alimentos = this.alimentos.filter(p => p !== alimento);
      })
  }

}
