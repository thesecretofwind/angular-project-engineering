import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, throwError, of, merge } from 'rxjs';
import { mergeMap} from 'rxjs/operators';

@Injectable()
export class HttpHanlderInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    const ob =  next.handle(request);
    ob.pipe(
      mergeMap( (event: HttpEvent<any>) => {
        if(event instanceof HttpResponse && event.status !== 200) {
          return throwError(() => new Error('请求错误'))
        }
        return of(event)
      })
    )
    return ob;
  }
}
