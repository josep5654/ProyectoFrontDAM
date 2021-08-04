import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiciosService } from 'src/app/Servicios/servicios.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {


  isLogged = false;

  constructor(private router:Router,private serviciosService: ServiciosService) { }

  ngOnInit() {
   
    if (this.serviciosService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  onLogOut(): void {

    window.onbeforeunload = function () {
     sessionStorage.clear();
     return ''
   }

    console.log(this.serviciosService.getToken())
    this.serviciosService.Logout();
    window.location.reload();
  }

  PaginaAdd(){
    this.router.navigate(['add']);
  }
 Login(){
    this.router.navigate(['login']);
  }
  PaginaIndex(){
    this.router.navigate(['']);
  }
}
