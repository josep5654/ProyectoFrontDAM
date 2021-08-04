import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alimentos } from '../modelos/Alimentos';
import { Jwt } from '../modelos/Security/jwt';
import { LoginUsuario } from '../modelos/Security/login-usuario';
import { NuevoUsuario } from '../modelos/Security/nuevo-usuario';


const TOKEN_KEY= 'AuthToken';
const USERNAME_KEY= 'AuthUserName';
const AUTHORITIES_KEY= 'AuthAuthorities';

@Injectable({
  providedIn: 'root'
})



export class ServiciosService {

  url2="http://localhost:8080/api/alimento/";
  url5="http://localhost:8080/auth/"
  roles:Array<string> = [];

  constructor(private http:HttpClient) {
   }
  
  getAllProductos(){
    return this.http.get<Alimentos[]>(this.url2+'all');
  }
  postProducto(producto:Alimentos):Observable<any>{
    return this.http.post<Alimentos>(this.url2,producto);
  }

  delProducto(alimento:Alimentos){
    console.log(this.url2+alimento.id)
    return this.http.delete<Alimentos>(this.url2+alimento.id);
    
  }
  getProductosById(id:number){
    return this.http.get<Alimentos>(this.url2+id)
  }
  updateProducto( producto:Alimentos):Observable<any>{
    return this.http.put<Alimentos>(this.url2+producto.id,producto);
  }
 getAlimentoById(id:number):Observable<any>{
    return this.http.get<Alimentos>(this.url2+id);
  }
  getImagenById(id:number):Observable<any>{
    return this.http.get<String>(this.url2+'imagenes/'+id);
  }

  uploadFile( file: File , id : number ) : Observable<any>
  {
    let url = this.url2 + "uploadImage/" + id ;
  
    console.log(url);
    const formdata: FormData = new FormData();

    formdata.append('file', file);
  
    console.log(file);
 
    return this.http.post(url , formdata);
  }
  setToken(token:string):void{
    window.sessionStorage.setItem(TOKEN_KEY,token);
  }
  getToken():string{
    return sessionStorage.getItem(TOKEN_KEY);
  }
  setUserName(userName:string):void{
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY,userName);
  }
  getUserName():string{
    return sessionStorage.getItem(USERNAME_KEY);
  }
  setAuthorities(authorities:string[]):void{
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    window.sessionStorage.setItem(AUTHORITIES_KEY,JSON.stringify(authorities));
  }
  getAuthorities():string[]{
    this.roles=[];
    if(sessionStorage.getItem(AUTHORITIES_KEY))
    JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)).forEach((authority: any) => {
      this.roles.push(authority.authority);
      
    });
    return this.roles;
  }

  Logout():void{
    window.sessionStorage.clear;
  }
  
  nuevoUsuario(nuevoUsuario:NuevoUsuario):Observable<any>{
    return this.http.post<NuevoUsuario>(this.url5+'nuevo',nuevoUsuario)
}
LoginUsuario(loginUsuario:LoginUsuario):Observable<Jwt>{
  return this.http.post<Jwt>(this.url5+'login',loginUsuario);
}

}

