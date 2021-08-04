import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alimentos } from 'src/app/modelos/Alimentos';
import { ServiciosService } from 'src/app/Servicios/servicios.service';

@Component({
  selector: 'app-aanadir',
  templateUrl: './aanadir.component.html',
  styleUrls: ['./aanadir.component.css']
})
export class AanadirComponent implements OnInit {

  selectedFiles: FileList;
  currentfileUpload: File;
  productos:Alimentos[];
  constructor(private route:Router, private servicio:ServiciosService) {}

  ngOnInit(): void {
   
  }


  selectFile(event) {
    const file = event.target.files.item(0);
  
    if (file.type.match('image.*')) {
      this.selectedFiles = event.target.files;
    } else {
      alert('invalid format!');
    }
  }
  GuardarF(){

    const nombre = document.querySelector<HTMLInputElement>('#nombre').value;
    const tipo = document.querySelector<HTMLInputElement>('#tipo').value;
    const marca = document.querySelector<HTMLInputElement>('#marca').value;
    const estado = document.querySelector<HTMLInputElement>('#estado').value;
    const cate = document.querySelector<HTMLInputElement>('#categoria').value;
    const ingre = document.querySelector<HTMLInputElement>('#ingredientes').value;
    const capa = document.querySelector<HTMLInputElement>('#capacidad').value;
    const tipoCapacidad = document.querySelector<HTMLInputElement>('#tipoCapacidad').value;
    const kcal = document.querySelector<HTMLInputElement>('#kcal').value;
    const grasa = document.querySelector<HTMLInputElement>('#grasa').value;
    const saturada = document.querySelector<HTMLInputElement>('#saturadas').value;
    const hidratos = document.querySelector<HTMLInputElement>('#hidratos').value;
    const azucar = document.querySelector<HTMLInputElement>('#azucares').value;
    const fibra = document.querySelector<HTMLInputElement>('#fibra').value;
    const proteinas = document.querySelector<HTMLInputElement>('#proteinas').value;
    const sal = document.querySelector<HTMLInputElement>('#sal').value;
  
    let formData : Alimentos={
      nombre: nombre,
      tipoAlimento: tipo,
      marca: marca,
      estado: estado,
      categoria: cate,
      ingredientes: ingre,
      capacidad: parseInt(capa),
      tipoCapacidad: tipoCapacidad,
      kcal: parseInt(kcal),
      grasa: parseInt(grasa),
      saturadas: parseInt(saturada),
      hidratos: parseInt(hidratos),
      azucares: parseInt(azucar),
      fibra: parseInt(fibra),
      proteinas: parseInt(proteinas),
      sal: parseInt(sal),
      imagen: ""
   };
  
    this.servicio.postProducto(formData).subscribe(data=>{
          console.log(data);
      
          if(data)
         
          {
           
            if(this.selectedFiles != null)
           
            {
              this.currentfileUpload = this.selectedFiles.item(0);
              console.log(this.currentfileUpload);
              
              this.servicio.uploadFile(this.currentfileUpload , data.id).subscribe(
                res => {
                  
                  
                  console.log(res)
                  
                   if(res)
                   {
                      alert("Imagen subida con exito ");
                   }
                   else{
                      alert("error while uploading fie details");
                      console.log("paso 4.1");
                   }
                },
                err => {
                    alert("error while uploading fie details");
                    console.log("paso 4.2");
                }
            );
     
     
      
     alert("Producto agregado con exito");
    // location.replace('');
    }
  }
})
}
}












  