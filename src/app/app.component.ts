import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Proyecto final DAM';

  constructor(private router : Router){}
  PaginaListarAll(){
    this.router.navigate(['']);
  }
 PaginaAdd(){
    this.router.navigate(['add']);
  }
}
