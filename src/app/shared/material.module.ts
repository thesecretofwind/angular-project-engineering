import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

//cdk
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';

//表单类
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule }  from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

//菜单类
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';

//列表类
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatGridListModule } from '@angular/material/grid-list';

//通用工具
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';

//angular
import { FlexLayoutModule } from '@angular/flex-layout'

const moduleArr: any[] = [
  DragDropModule,
  ScrollingModule,
  CdkTableModule,
  CdkTreeModule,

  MatFormFieldModule,
  MatCheckboxModule,
  MatButtonModule,
  MatChipsModule,
  MatDatepickerModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,

  MatButtonToggleModule,
  MatMenuModule,
  MatTabsModule,
  MatToolbarModule,
  MatListModule,
  MatExpansionModule,

  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatGridListModule,

  MatProgressBarModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatCardModule,
  MatDialogModule,

  FlexLayoutModule
]

@NgModule({
  imports: [...moduleArr],
  exports: [...moduleArr]
})
export class MaterialModule {}
