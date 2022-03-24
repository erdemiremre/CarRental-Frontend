import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token =localStorage.getItem("token"); //tokeni yakalamak için
    let newRequest:HttpRequest<any>;

     //mevcut isteğimizi clonunu alıp içine atar.Clon'un içine ekleme yapıyoruz.
    newRequest = request.clone({
      headers: request.headers.set("Authorization","Bearer "+ token)
    })
    return next.handle(newRequest);
  }
}

//request : bizim yaptığımız herhangibir istek
//next : bizim bir sonraki aşamda olacak olan işlem.
//interceptor : araya girmek. Bir post işlemi yaparken araya girip token varsa pakete ekler göndeririz.
