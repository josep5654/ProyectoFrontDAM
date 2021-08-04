import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Alimentos } from './modelos/Alimentos';

@Injectable({
  providedIn: 'root'
})
export class ServicioSpringService {

  Url='http://localhost:8080/supers/todo';

  constructor(private http:HttpClient) { }

  getAllProductos(){
    return this.http.get<Alimentos[]>(this.Url)
  }
}
