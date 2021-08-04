import { NgLocaleLocalization } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Alimentos } from 'src/app/modelos/Alimentos';
import { ServiciosService } from 'src/app/Servicios/servicios.service';

@Component({
  selector: 'app-aeditar',
  templateUrl: './aeditar.component.html',
  styleUrls: ['./aeditar.component.css']
})
export class AeditarComponent implements OnInit {
  productosEditar:Alimentos[]= [];

  constructor(private router:Router, private service:ServiciosService,private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
   const params =  this.activeRoute.snapshot.params;
   this.service.getProductosById(params.id).subscribe(data=>{this.productosEditar.push(data);
  console.log(data);}
    )
  }
  guardarEdit(producto){
  let id = producto.id;
  let nombre = producto.nombre;
  let tipoAlimento= producto.tipoAlimento;
  let marca= producto.marca;
  let estado= producto.estado;
  let categoria= producto.categoria;
  let ingredientes= producto.ingredientes;
  let capacidad= producto.capacidad;
  let tipoCapacidad= producto.tipoCapacidad;
  let kcal= producto.kcal;
  let grasa= producto.grasa;
  let saturadas= producto.saturadas;
  let hidratos= producto.hidratos;
  let azucares= producto.azucares;
  let fibra= producto.fibra;
  let proteinas= producto.proteinas;
  let sal= producto.sal;
  
  let formData2 : Alimentos={
    id: id,
    nombre: nombre,
    tipoAlimento: tipoAlimento,
    marca: marca,
    estado: estado,
    categoria: categoria,
    ingredientes: ingredientes,
    capacidad: capacidad,
    tipoCapacidad: tipoCapacidad,
    kcal: kcal,
    grasa: grasa,
    saturadas: saturadas,
    hidratos: hidratos,
    azucares: azucares,
    fibra: fibra,
    proteinas: proteinas,
    sal: sal
 };


    this.service.updateProducto(formData2).subscribe(data=>{
 
  alert("Producto actualizado con exito");
  location.replace('');
     
 })
}
}
  
