import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiciosService } from '../Servicios/servicios.service';

@Injectable({
  providedIn: 'root'
})
export class ServiciosInterceptorService implements HttpInterceptor {

  constructor(private sercicios: ServiciosService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let intReq  = req;
    const token = this.sercicios.getToken();
    if (token != null){
      intReq = req.clone({headers: req.headers.set('Authorization','Bearer '+token)});
    }
    return next.handle(intReq);
  }
}
export const interceptorProvider = [{provide: HTTP_INTERCEPTORS, useClass: ServiciosInterceptorService, multi: true }]