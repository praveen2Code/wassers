import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
    ): Observable<HttpEvent<any>> {
    // tslint:disable-next-line:prefer-const
    let reqUrl = environment.apiBaseUrl;
    req = req.clone({
    headers: req.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token')),
    url: reqUrl + '' + req.url
    });
    return next.handle(req);
    }
}
