import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse
} from '@angular/common/http';
import { Router, RouterEvent } from '@angular/router';

import { filter, Observable, tap } from 'rxjs';

/** Redirect to error pages */
@Injectable({
  providedIn: 'root'
})
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router) {
    // this.router.events.pipe(
    //   filter((e: any) => e instanceof RouterEvent)
    // ).subscribe(event => {
    //   console.log('router event: ', event);
    // })
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('http error interceptor: ', req);

    return next.handle(req).pipe(
      tap(
        () => { },
        (error: HttpEvent<any>) => {
          if (error instanceof HttpErrorResponse) {
            switch (error.status) {
              case 401:
                this.router.navigate(['errors', 'unauthorized'], { skipLocationChange: true });
                break;
              case 403:
                this.router.navigate(['errors', 'forbidden'], { skipLocationChange: true });
                break;
              case 404:
                this.router.navigate(['errors', 'not-found'], { skipLocationChange: true });
                break;
              case 503:
                this.router.navigate(['errors', 'maintanance'], { skipLocationChange: true });
                break;
              case 504:
                this.router.navigate(['errors', 'timeout'], { skipLocationChange: true });
                break;
            }
          }
        }
      )
    );
  }
}
