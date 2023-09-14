import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, of,tap } from 'rxjs';

import { MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { ErrorDialogComponent } from '../components/error-dialog/error-dialog.component';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  dialogConfig: MatDialogConfig;
  constructor(private dialog:MatDialog) {
    this.dialogConfig = {
      minHeight: 250,
      minWidth: 450,
      disableClose:true
    }
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap(event => of(event),
          error => {
            if(error.status === 500) {
              this.errorHanlder(error);
            }
          }
         )
    );
  }

  errorHanlder(error: any) :void {
    this.dialogConfig.data = error;
    this.dialog.open(ErrorDialogComponent, this.dialogConfig)
  }
}
