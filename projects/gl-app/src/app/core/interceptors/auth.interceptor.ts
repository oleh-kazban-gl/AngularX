import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';

const AuthToken = '40f1cb8eac5fae6729042c23cb99ae0491fc82a8'
const AuthHeaderName = 'Authorization'

/** Adds authorization headers. */
@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('auth interceptor: ', req);

    // req.headers.set(AuthHeaderName, `Bearer ${AuthToken}`);
    // return next.handle(req);

    return next.handle(req.clone({
      setHeaders: {
        Authorization: `Bearer ${AuthToken}`
      }
    }));
  }
}
