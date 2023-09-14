import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';

import { ErrorDialogComponent } from './error-dialog/error-dialog.component';

@NgModule({
  declarations: [ErrorDialogComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[ErrorDialogComponent]
})
export class ComponentsModule { }
