import { ErrorHandler, Injectable } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { HttpErrorResponse } from "@angular/common/http";
import { ErrorDialogComponent } from "../components/error-dialog/error-dialog.component";

@Injectable({
    providedIn:'root'
})
export class HttpErrorHanlder  {
    dialogConfig:MatDialogConfig;
    constructor(private dialog: MatDialog) {
        this.dialogConfig = {}
    }

    hanldeError(error: any): void {
        //异步的情况
        if(error.promise) {
            error.promise.catch( (xhr: any) => {
                //非http异常,跳过
                if( !(xhr instanceof HttpErrorResponse)) {
                    return ;
                }
    
                this.httpErrorHanlder(xhr as HttpErrorResponse)
            })
            return;
        }

        if(!(error instanceof HttpErrorResponse)) {
            return ;
        }
        this.httpErrorHanlder(error as HttpErrorResponse)
    }

    private httpErrorHanlder(error: HttpErrorResponse):void {
        this.dialogConfig.data = {
            error
        }
        this.dialog.open(ErrorDialogComponent,{})
    }
}