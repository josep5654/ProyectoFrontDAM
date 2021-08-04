import { getTreeMissingMatchingNodeDefError } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Alimentos } from 'src/app/modelos/Alimentos';
import { ServiciosService } from 'src/app/Servicios/servicios.service';
@Component({
  selector: 'app-alistado-por-id',
  templateUrl: './alistado-por-id.component.html',
  styleUrls: ['./alistado-por-id.component.css']
})
export class AlistadoPorIdComponent implements OnInit {
  alimentos:Alimentos;
 imagenGlobal:string;
  constructor(private router:Router, private service:ServiciosService,private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
   const params =  this.activeRoute.snapshot.params;
   this.service.getProductosById(params.id).subscribe(data=>{this.alimentos=data;
  this.getimage(this.alimentos.id);

})


   
}

private handleData(data: any) {
  console.log("Easter Egg: Gracias Javier por la ayuda :)");
  this.imagenGlobal = "data:image/"+data.format.toUpperCase()+";base64,"+data.imagen;
}    
getimage(id:number){
 var a = this.service.getImagenById(id);
 a.subscribe(data=>{
  this.handleData(data)
 });



}
  
}
