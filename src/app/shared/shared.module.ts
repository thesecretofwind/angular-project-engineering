import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgProgressModule } from 'ngx-progressbar';
import { NgProgressHttpModule } from 'ngx-progressbar/http';
import { NgProgressRouterModule } from 'ngx-progressbar/router';

import { HanlderModule } from './hanlder/hanlder.module';
import { MaterialModule } from './material.module';
import { ComponentsModule } from './components/components.module';
import { MockModule } from './mock.module';

const modules = [
  CommonModule,
  RouterModule,
  NgProgressModule,
  NgProgressHttpModule,
  NgProgressRouterModule,
  HanlderModule,
  MaterialModule,
  ComponentsModule,
  MockModule
]

@NgModule({
  declarations: [
  
  ],
  imports:[...modules],
  exports:[...modules]
})
export class SharedModule { }
